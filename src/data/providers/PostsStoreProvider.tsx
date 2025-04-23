import { createContext, ReactNode, useContext, useState } from "react";
 
import { useStore } from "zustand";
 
import createPostsStore, { PostsStore } from "../../stores/PostsStore";
import { VideosAPIService } from "../../services/VideosAPIService";
import PostRepository from "../repositories/post/PostRepostitory";

const PostsStoreContext = createContext<ReturnType<
  typeof createPostsStore
> | null>(null);

export function PostsStoreProvider({
  children,
}: {
  children: ReactNode;
}) {
  const youtubeService = new VideosAPIService();
  //const databaseService = new LocalDatabaseService()
  const postRepository = new PostRepository(youtubeService);
  const [postsStore] = useState(
    createPostsStore(postRepository)
  );

  return (
    <PostsStoreContext.Provider value={postsStore}>
      {children}
    </PostsStoreContext.Provider>
  );
}

export function usePostsStore<U>(selector: (state: PostsStore) => U) {
  const store = useContext(PostsStoreContext);

  if (store === null) {
    throw new Error(
      "usePostsStore must be used within PostsStoreProvider"
    );
  }

  return useStore(store, selector);
}
