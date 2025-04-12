import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import YoutubeTabStack from "./src/navigation/YoutubeTabStack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { YoutubeThemeProvider } from "./src/providers/YoutubeThemeProvider";

const RootStack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
          'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
          'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
          'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
          'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
          'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    
  });

  const backgroundStyle = {
    //  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  if (!fontsLoaded) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large" />
        <Text>Loading Fonts...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <YoutubeThemeProvider>
       <SafeAreaProvider>
        <SafeAreaView edges={["top"]} style={backgroundStyle}>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="YoutubeTabs" component={YoutubeTabStack} />
          </RootStack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
      </YoutubeThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
