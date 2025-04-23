// Generated with util/create-view.js
import React from 'react';
import {FlatList, View, Text, Pressable} from 'react-native';

import { HomeViewProps } from './Home.types';
import  styles  from './Home.styles';
import PostView from '../../components/PostView';
 import { useNavigation } from '@react-navigation/native';
import {  RootStackScreenProps } from '../../@types/Navigation';

const HomeView: React.FC<HomeViewProps> = (props) => {

   const navigation = useNavigation<RootStackScreenProps<'PostDetails'>['navigation']>();

   return (
    <FlatList
     style={{flex: 1}}
     data={props.posts}
     renderItem={({item})=>{
      return (
        <Pressable key={item.id} onPress={()=>{ navigation.navigate('PostDetails', {post: item}) }}>
          <PostView post={item} />
        </Pressable>
        )
     }}
    />
   )
};

export default HomeView;
