import React from "react";
import { Pressable, StyleSheet, ViewStyle, GestureResponderEvent, View, TouchableOpacity } from "react-native";

type IconButtonProps = {
  icon: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  accessibilityLabel: string;
  style?: ViewStyle;
  size?: number;
  backgroundColor?: string;
};

export const IconButton = ({
  icon,
  onPress,
  accessibilityLabel,
  style,
  size = 44,
  backgroundColor = "#f0f0f0",
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      <View pointerEvents="none">{icon}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
});