const typography = {
    displayLarge: { fontFamily: 'Roboto', fontSize: 57},
    headlineMedium: { fontFamily: 'Roboto-Medium', fontSize: 28},
    titleMedium: { fontFamily: 'Roboto-Medium', fontSize: 16},
    bodyLarge: { fontFamily: 'Roboto', fontSize: 16},
    labelMedium: { fontFamily: 'Roboto-Medium', fontSize: 12},
  };

  export const youtubeLightTheme = {
    dark: false,
    colors: {
      primary: '#FF0000',
      onPrimary: '#FFFFFF',
      background: '#FFFFFF',
      onBackground: '#0F0F0F',
      surface: '#FFFFFF',
      onSurface: '#0F0F0F',
      surfaceVariant: '#F1F1F1',
      onSurfaceVariant: '#3C3C3C',
      outline: '#BDBDBD',
      error: '#B00020',
      onError: '#FFFFFF',
    },
    typography,
    elevation: {
      level0: 'transparent',
      level1: '#F5F5F5',
      level2: '#E0E0E0',
    },
  };

  export const youtubeDarkTheme = {
    dark: true,
    colors: {
      primary: '#FF8A80',
      onPrimary: '#000000',
      background: '#121212',
      onBackground: '#FFFFFF',
      surface: '#1E1E1E',
      onSurface: '#FFFFFF',
      surfaceVariant: '#2A2A2A',
      onSurfaceVariant: '#E0E0E0',
      outline: '#4F4F4F',
      error: '#CF6679',
      onError: '#000000',
    },
    typography,
    elevation: {
      level0: 'transparent',
      level1: '#1E1E1E',
      level2: '#2C2C2C',
    },
  };