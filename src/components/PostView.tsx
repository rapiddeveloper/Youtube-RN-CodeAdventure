import { Dimensions, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { Post } from "../Domain/Models/Post";
import { Box, Column, Stack } from "@mobily/stacks";
import ProfilePhoto from "./ProfilePhoto";
import {Image} from "expo-image"

import Feather from "@expo/vector-icons/Feather";
import { useYoutubeTheme } from "../providers/YoutubeThemeProvider";
import { IconButton } from "./Inputs/IconButton";

interface PostViewProps {
  post: Post;
}



const PostView = (props: PostViewProps) => {
  const { post } = props;
  
  return (
    <Stack style={{ width: "100%" }}>
      <Image
        source={{ uri: post.thumbnail.medium.url }}
        style={{ width: "auto", aspectRatio: 576 / 325 }}
      />

     <InfoView post={post} />
    </Stack>
  );
};

export default PostView;

const InfoView = ({ post }: { post: Post }) => { 

  const { theme } = useYoutubeTheme();
  const { colors } = theme;
  const { typography } = theme;

  const infoText: StyleProp<TextStyle> = [typography.labelMedium, { color: colors.outline, fontSize: 10 }]

  return (
    <Stack
    space={2}
    horizontal
    style={[styles.footer, { backgroundColor: colors.surface }]}
  >
    <ProfilePhoto url={post.channelProfileURL} />
    <Stack space={2} style={styles.metadata}>
      <Text
        style={[
          styles.title,
          typography.bodyLarge,
          { color: colors.onSurface, fontSize: 10 },
        ]}
      >
        {post.title}
      </Text>
      <Stack horizontal space={1} align={"center"}>
        {/* {
          [post.channelTitle, post.viewCount, post.publishedAt].map((item, index) => (
            <>
            <Text
              key={index}
              style={[typography.labelMedium, { color: colors.outline, fontSize: 10 }]}
            >
              {item}
            </Text>
            <Box style={styles.seperator}></Box>
            </>
          ))
        } */}
        <Text style={infoText}>
          {post.channelTitle}
        </Text>
        <Box style={styles.seperator}></Box>
        <Text style={infoText}>
          {post.viewCount}
        </Text>
        <Box style={styles.seperator}></Box>
        <Text style={infoText}>
          {post.publishedAt}
        </Text>
      </Stack>
    </Stack>
    <IconButton
    accessibilityLabel="More actions"
      icon={
        <Feather name="more-vertical" size={24} color={colors.onSurface} />
      }
      onPress={() => console.log("Icon button pressed")}
    />
  </Stack>
  )
}

const styles = StyleSheet.create({
  metadata: {
    width: Dimensions.get("screen").width * 0.7,
  },
  title: {},
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
