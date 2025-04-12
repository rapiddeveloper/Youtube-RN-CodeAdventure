import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type YoutubeTheme = {
    dark: boolean;
    colors: {
      primary: string;
      onPrimary: string;
      background: string;
      onBackground: string;
      surface: string;
      onSurface: string;
      surfaceVariant: string;
      onSurfaceVariant: string;
      outline: string;
      error: string;
      onError: string;
    };
    typography: {
        displayLarge: StyleProp<TextStyle>;
        headlineMedium: StyleProp<TextStyle>;
        titleMedium: StyleProp<TextStyle>;
        bodyLarge: StyleProp<TextStyle>;
        labelMedium: StyleProp<TextStyle>;
    };
    elevation: {
      level0: string;
      level1: string;
      level2: string;
    };
  };