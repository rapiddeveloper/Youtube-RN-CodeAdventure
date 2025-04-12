import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Post } from "../Domain/Models/Post";
import { Box, Column, Stack } from "@mobily/stacks";
import ProfilePhoto from "./ProfilePhoto";

import Feather from "@expo/vector-icons/Feather";
import { useYoutubeTheme } from "../providers/YoutubeThemeProvider";

interface PostViewProps {
  post: Post;
}

const PostView = (props: PostViewProps) => {
  const { post } = props;
  const theme = useYoutubeTheme();
  const { colors } = theme;
  const {typography} = theme;
  return (
    <Stack style={{width: "100%"}}>
      <Image
        source={{ uri: post.thumbnail.high.url }}
        style={{ width: "auto", height: 325 }}
      />
       
      <Stack space={2} horizontal style={[styles.footer, {backgroundColor: colors.surface} ]}>
        <ProfilePhoto url={post.channelProfileURL} />
        <Stack space={2} style={styles.metadata}>
          <Text   style={[styles.title, typography.bodyLarge, {color: colors.onSurface}]}>{post.title}</Text>
          <Stack horizontal space={1} align={'center'}>
            <Text  style={[typography.labelMedium, {color: colors.outline}]}>{post.channelTitle}</Text>
            <Box style={styles.seperator}></Box>
            <Text  style={[typography.labelMedium, {color: colors.outline}]}>{post.viewCount}</Text>
            <Box style={styles.seperator}></Box>
            <Text  style={[typography.labelMedium, {color: colors.outline}]}>{post.publishedAt}</Text>
          </Stack>
        </Stack>
        <Feather
              name="more-vertical"
              size={24}
             // style={styles.moreIcon}
              color={colors.onSurface}
            />
      </Stack>
      
    </Stack>
  );
};

export default PostView;

const styles = StyleSheet.create({

  metadata: {
    width: Dimensions.get('screen').width * 0.7
  },
  title: {
   },
  footer: {
    paddingBlockStart: 16,
    paddingBlockEnd: 22,
    paddingInlineStart: 16,
    paddingInlineEnd: 36,
    //width:  "100%"
  },
  seperator: {
    backgroundColor: "gray",
    width: 2,
    height: 2,
    borderRadius: "100%",
  },
  moreIcon: {
    width: 6,
    height: 23,
  },
});
