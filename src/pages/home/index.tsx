// Generated with util/create-view.js
import React, { useEffect } from 'react';

import { HomeProps } from './Home.types';
import HomeView from './Home.view';
import usePostsStore from '../../stores/PostsStore';
import { useShallow } from 'zustand/shallow';
import { RequestStatus } from '../../@types/Result';


const Home: React.FC<HomeProps> = (props) => {

  const postsStore = usePostsStore(useShallow((store)=>({
    loadPosts: store.loadPosts,
    isLoadingPosts: store.isLoadingPosts,
    posts: store.posts
  })))

  useEffect(()=>{
     (async ()=>{
         try {
            await postsStore.loadPosts()
         } catch (error) {
          
         }
     })()
  }, [])

  return (
        <>
          {
            postsStore.isLoadingPosts === RequestStatus.Success && (
              <HomeView posts={postsStore.posts} />
            )
          }
        </>
  )
};

export default Home;
