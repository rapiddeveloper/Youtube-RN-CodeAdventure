import { create, createStore } from "zustand";
import videosAPIService from "../services/VideosAPIService";
import { RequestStatus, ResultType } from "../@types/Result";
import { MediaKind, Post } from "../Domain/Models/Post";
import PostRepository from "../data/repositories/post/PostRepostitory";



export interface PostsStore {
  posts: Post[]
  loadPosts: () => Promise<void>
  isLoadingPosts: RequestStatus
  isEmpty: () => boolean
}

/*
const usePostsStore = create<PostsStore>((set, get) => ({
  // isLoadingVideos: false,
  isLoadingPosts: RequestStatus.Idle,
  posts: [],
  loadPosts: async ():Promise<void> => {
    set({isLoadingPosts: RequestStatus.Loading})
    let result = await videosAPIService.getYoutubeVideos();
     if (result.type == ResultType.Failure) {
      set({isLoadingPosts: RequestStatus.Idle})
      return;
    }
    set({isLoadingPosts: RequestStatus.Success})

    
    let posts: Post[] = []
    for (const value of result.value.items) {
         let post: Post = {
            id: value.id,
            thumbnail: value.snippet.thumbnails,
            title: value.snippet.title,
            channelProfileURL: "https://res.cloudinary.com/adminixtrator/image/upload/v1742196112/vmodel/sq-2.png",
            viewCount:  formatViewCountString(value.statistics.viewCount),
            publishedAt: formatTimeSinceDate(value.snippet.publishedAt),
            description: value.snippet.description,
            mediaKind: MediaKind.video,
            channelTitle: value.snippet.channelTitle,
            mediaUrl: "",
          }
         let channelsResult = await videosAPIService.getChannels([value.snippet.channelId])
         

         if (channelsResult.type === ResultType.Success && channelsResult.value.items.length > 0) {
           // console.log(channelsResult.value.items[0].snippet.thumbnails.l)
            post.channelProfileURL = channelsResult.value.items[0].snippet.thumbnails.medium.url
        } 
         posts.push(post)
        
    }
    
   
    set({posts: posts})
  },
}));

function formatViewCountString(input: string): string {
    const num = parseFloat(input);
  
    if (isNaN(num) || num < 0 || num > 1_000_000_000_000) {
       return "0"
      //throw new Error('Input must be a numeric string between 0 and 1 trillion');
    }
  
    const suffixes = [
      { value: 1_000_000_000_000, suffix: 'T' },
      { value: 1_000_000_000, suffix: 'B' },
      { value: 1_000_000, suffix: 'M' },
      { value: 1_000, suffix: 'k' },
    ];
  
    for (const { value, suffix } of suffixes) {
      if (num >= value) {
        return `${(num / value).toFixed(1).replace(/\.0$/, '')}${suffix} views`;
      }
    }
  
    const viewsStr = num === 1 ? "view" : "views"
    return `${num.toString()} ${viewsStr}`;
  }

  function formatTimeSinceDate(dateStr: string): string {
    const inputDate = new Date(dateStr);
    const now = new Date();
  
    if (isNaN(inputDate.getTime())) {
      throw new Error('Invalid date string');
    }
  
    const diffMs = now.getTime() - inputDate.getTime();
    const diffSec = Math.round(diffMs / 1000);
    const diffMin = Math.round(diffSec / 60);
    const diffHr = Math.round(diffMin / 60);
    const diffDay = Math.round(diffHr / 24);
    const diffMonth = Math.round(diffDay / 30);
    const diffYear = Math.round(diffDay / 365);
  
    if (diffMs < 0) {
      // Future date
      const absDays = Math.abs(diffDay);
      if (absDays === 0) return "later today";
      if (absDays === 1) return "in 1 day";
      return `in ${absDays} days`;
    }
  
    // Past date
    if (diffSec < 60) return "just now";
    if (diffMin < 60) return `${diffMin} minute${diffMin === 1 ? '' : 's'} ago`;
    if (diffHr < 24) return `${diffHr} hour${diffHr === 1 ? '' : 's'} ago`;
    if (diffDay < 30) return `${diffDay} day${diffDay === 1 ? '' : 's'} ago`;
    if (diffMonth < 12) return `${diffMonth} month${diffMonth === 1 ? '' : 's'} ago`;
  
    return `${diffYear} year${diffYear === 1 ? '' : 's'} ago`;
  }

export default usePostsStore */

const createPostsStore = (postsRepository: PostRepository) => createStore<PostsStore>()((set, get) => ({
  // isLoadingVideos: false,
  isLoadingPosts: RequestStatus.Idle,
  posts: [],
  loadPosts: async ():Promise<void> => {
     console.log("loading")
     console.log(get().posts.length)
    // test if can load more posts
    if (get().posts.length > 0 && !postsRepository.canLoadmorePosts) {
      return;
    }

    if (get().isLoadingPosts !== RequestStatus.Idle) {
      return;
    }

    set({isLoadingPosts: RequestStatus.Loading})
    let {posts: fetchedPosts, error} = await postsRepository.getAllPosts();
     if (error !== undefined) {
      set({isLoadingPosts: RequestStatus.Idle})
      return;
    }

    if (fetchedPosts === undefined) {
      set({isLoadingPosts: RequestStatus.Idle})
      return;
    }

    set({isLoadingPosts: RequestStatus.Idle})
  
    set({posts: [...get().posts, ...fetchedPosts]})
   
   },
   isEmpty: (): boolean => {
    return get().posts.length === 0
   }
}));



export default createPostsStore
