// Generated with util/create-view.js
import React, { useCallback } from 'react';
import {FlatList, View, Text, Pressable, ListRenderItem} from 'react-native';

import { HomeViewProps } from './Home.types';
import  styles  from './Home.styles';
import PostView from '../../components/PostView';
 import { useNavigation } from '@react-navigation/native';
import {  RootStackScreenProps } from '../../@types/Navigation';
import { Post } from '../../Domain/Models/Post';

const HomeView: React.FC<HomeViewProps> = (props) => {

   const navigation = useNavigation<RootStackScreenProps<'PostDetails'>['navigation']>();

   
  const renderItem = useCallback(
    ({ item }: { item: Post }) => <MemoizedPostItem item={item} navigation={navigation} />,
    [navigation]
  );

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

const PostItem: React.FC<{ item: Post; navigation: any }> = ({ item, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('PostDetails', { post: item });
      }}
    >
      <PostView post={item} />
    </Pressable>
  );
};

const MemoizedPostItem = React.memo(PostItem);


export default HomeView;
