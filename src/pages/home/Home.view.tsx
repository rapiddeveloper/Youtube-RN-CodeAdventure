// Generated with util/create-view.js
import React from 'react';
import {FlatList, View, Text} from 'react-native';

import { HomeViewProps } from './Home.types';
import  styles  from './Home.styles';
import PostView from '../../components/PostView';

const HomeView: React.FC<HomeViewProps> = (props) => {

  console.log(props.posts)
  return (
    <FlatList
     style={{flex: 1}}
     data={props.posts}
     renderItem={({item})=>{
      return (
         <PostView post={item} />
        // <Text>{item.title}</Text>
      )
     }}
    />
   )
};

export default HomeView;
