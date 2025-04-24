import { ResultType } from "../../../@types/Result";
import { MediaKind, Post } from "../../../Domain/Models/Post";
import { VideosAPIService } from "../../../services/VideosAPIService";
 import PostRepositoryAbstract from "./PostRepositoryAbstract";

class PostRepository extends PostRepositoryAbstract {

    service: VideosAPIService;

    constructor(service: VideosAPIService) {
        super();
        this.service = service
    }

    
    public get canLoadmorePosts(): boolean {
        return this.service.canGetMoreVideos
    }
    

    async getPostsByIds(ids: string[]): Promise<Post[]> {
        return []
    }

    async getAllPosts(): Promise<{posts?: Post[], error?: Error}> {
        let result = await this.service.getYoutubeVideos();
        if (result.type == ResultType.Failure) {
          return {error: result.error}
       }
    
       
       let posts: Post[] = []
       for (const value of result.value.items) {
            let post: Post = {
               id: value.id,
               thumbnail: value.snippet.thumbnails,
               title: value.snippet.title,
               channelProfileURL: "https://res.cloudinary.com/adminixtrator/image/upload/v1742196112/vmodel/sq-2.png",
               viewCount:  this.formatViewCountString(value.statistics.viewCount),
               publishedAt: this.formatTimeSinceDate(value.snippet.publishedAt),
               description: value.snippet.description,
               mediaKind: MediaKind.video,
               channelTitle: value.snippet.channelTitle,
               mediaUrl: "",
             }
            let channelsResult = await this.service.getChannels([value.snippet.channelId])
            
   
            if (channelsResult.type === ResultType.Success && channelsResult.value.items.length > 0) {
              // console.log(channelsResult.value.items[0].snippet.thumbnails.l)
               post.channelProfileURL = channelsResult.value.items[0].snippet.thumbnails.medium.url
           } 
            posts.push(post)
           
       }
        // update next page token
         return {posts}
    }

    private formatViewCountString(input: string): string {
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
    
      private formatTimeSinceDate(dateStr: string): string {
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
}

export default PostRepository