import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { YoutubeTheme } from "../@types/YoutubeTheme";
import { youtubeLightTheme, youtubeDarkTheme } from "../theme/theme";
import { Appearance, useColorScheme } from "react-native";

type YoutubeThemeProviderProps = {
  children: ReactNode;
};

interface ThemeObj {
  theme: YoutubeTheme;
  toggleTheme: () => void;
}

const YoutubeThemeContext = createContext<ThemeObj | undefined>(undefined);

export const YoutubeThemeProvider = ({
  children
 
}: YoutubeThemeProviderProps) => {
  const colorScheme = useColorScheme();
  
  const [theme, setTheme] = useState<YoutubeTheme>(
    colorScheme === "dark" ? youtubeDarkTheme : youtubeLightTheme
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
       setTheme(colorScheme === "dark" ? youtubeDarkTheme : youtubeLightTheme);
    });

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    Appearance.setColorScheme(theme === youtubeDarkTheme ? "light" : "dark");
  };

  const themeObj: ThemeObj = {
    theme,
    toggleTheme,
  };
  return (
    <YoutubeThemeContext.Provider value={themeObj}>
      {children}
    </YoutubeThemeContext.Provider>
  );
};

export const useYoutubeTheme = (): ThemeObj => {
  const context = useContext(YoutubeThemeContext);
  if (!context) {
    throw new Error(
      "useYoutubeTheme must be used within a YoutubeThemeProvider"
    );
  }
  return context;
};
