// Generated with util/create-view.js
import React, { useEffect } from "react";

import { HomeProps } from "./Home.types";
import HomeView from "./Home.view";
import { useShallow } from "zustand/shallow";
import { RequestStatus } from "../../@types/Result";
import { usePostsStore } from "../../data/providers/PostsStoreProvider";
import { ActivityIndicator, Text } from "react-native";

const Home: React.FC<HomeProps> = (props) => {
  const postsStore = usePostsStore(
    useShallow((store) => ({
      loadPosts: store.loadPosts,
      isLoadingPosts: store.isLoadingPosts,
      posts: store.posts,
      isEmpty: store.isEmpty,
    }))
  );

  useEffect(() => {
    (async () => {
      try {
        await postsStore.loadPosts();
      } catch (error) {}
    })();
  }, []);

  const handleLoadmorePosts = async () => {
    if (postsStore.isLoadingPosts !== RequestStatus.Success) {
      return;
    }

    try {
      await postsStore.loadPosts();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      <HomeView
        posts={postsStore.posts}
        onLoadmorePosts={handleLoadmorePosts}
      />
      {postsStore.isLoadingPosts === RequestStatus.Loading &&
      postsStore.isEmpty() ? (
        <ActivityIndicator size={'large'} />
      ) : postsStore.isLoadingPosts === RequestStatus.Success &&
        postsStore.isEmpty() ? (
        <Text>No Posts Available</Text>
      ) : (
        <Text>Failed To Get Posts</Text>
      )}

      
    </>
  );
};

export default Home;
