import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { YoutubeTheme } from "../@types/YoutubeTheme";
import { youtubeLightTheme, youtubeDarkTheme } from "../theme/theme";
import { Appearance } from "react-native";

type YoutubeThemeProviderProps = {
  children: ReactNode;
  isDarkMode?: boolean; // Optional prop to toggle between light and dark themes
};

const YoutubeThemeContext = createContext<YoutubeTheme | undefined>(undefined);

export const YoutubeThemeProvider = ({
  children,
  isDarkMode = undefined,
}: YoutubeThemeProviderProps) => {
    const [theme, setTheme] = useState<YoutubeTheme>(
        isDarkMode !== undefined
          ? isDarkMode
            ? youtubeDarkTheme
            : youtubeLightTheme
          : Appearance.getColorScheme() === "dark"
          ? youtubeDarkTheme
          : youtubeLightTheme
      );
    
      useEffect(() => {
        if (isDarkMode !== undefined) {
          setTheme(isDarkMode ? youtubeDarkTheme : youtubeLightTheme);
        } else {
          const listener = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme === "dark" ? youtubeDarkTheme : youtubeLightTheme);
          });
    
          return () => listener.remove();
        }
      }, [isDarkMode]);


  return (
    <YoutubeThemeContext.Provider value={theme}>
      {children}
    </YoutubeThemeContext.Provider>
  );
};

export const useYoutubeTheme = (): YoutubeTheme => {
  const context = useContext(YoutubeThemeContext);
  if (!context) {
    throw new Error(
      "useYoutubeTheme must be used within a YoutubeThemeProvider"
    );
  }
  return context;
};