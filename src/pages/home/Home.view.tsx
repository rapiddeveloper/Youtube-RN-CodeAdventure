// Generated with util/create-view.js
import React, { useCallback } from 'react';
import {FlatList,  Pressable,   ListRenderItemInfo} from 'react-native';

import { HomeViewProps } from './Home.types';
import  styles  from './Home.styles';
import PostView from '../../components/PostView';
 import { useNavigation } from '@react-navigation/native';
import {  RootStackScreenProps } from '../../@types/Navigation';
import { Post } from '../../Domain/Models/Post';

const HomeView: React.FC<HomeViewProps> = (props) => {

   const navigation = useNavigation<RootStackScreenProps<'PostDetails'>['navigation']>();

   
   const renderItem = ({ item }: ListRenderItemInfo<Post>) => {
     return (
      <Pressable
        onPress={() => {
          navigation.navigate('PostDetails', { post: item });
        }}
      >
        <PostView post={item} />
      </Pressable>
    );
   }

   if (props.posts.length === 0) {
     return null
   }

 
   return (
    <FlatList
     style={{flex: 1}}
     data={props.posts}
     onEndReachedThreshold={0.9}
     onEndReached={() => {
        props.onLoadmorePosts()
     }}
     renderItem={renderItem}
    />
   )
};

 

 

export default HomeView;
