import { Dimensions, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import Create from "../pages/create";
import Shorts from "../pages/shorts";
import Subscriptions from "../pages/subscriptions";
import Account from "../pages/account";
import HomeIcon from "../components/Icons/HomeIcon";
import ShortsIcon from "../components/Icons/ShortsIcon";
import SubscriptionsIcon from "../components/Icons/SubscriptionsIcon";
import { PlatformPressable } from "@react-navigation/elements";
import { Stack } from "@mobily/stacks";
import { useLinkBuilder } from "@react-navigation/native";
import { useYoutubeTheme } from "../data/providers/YoutubeThemeProvider";
import { YoutubeTabStackParamList } from "../@types/Navigation";

const BottomTabs = createBottomTabNavigator<YoutubeTabStackParamList>();

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  // const {colors} = useTheme();
  const { buildHref } = useLinkBuilder();
  const { theme } = useYoutubeTheme();

  // if (isKeyboardVisible) return null;

  return (
    <Stack
      space={0}
      horizontal
      style={{
        alignItems: "flex-start",
        justifyContent: 'center',
        backgroundColor: theme.colors.surface,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
       
        position: "absolute",
        bottom: 0,
        width: Dimensions.get("screen").width,
       
        paddingBottom: 5,
       
      }}
    >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const activeColor =
          options.tabBarActiveTintColor || theme.colors.onPrimary;
        const inactiveColor =
          options.tabBarInactiveTintColor || theme.colors.outline;

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name === "Create"
            ? ""
            : route.name;

        const isFocused = state.index === index;
        const color = isFocused ? activeColor : inactiveColor;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={label}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
             style={{width: Dimensions.get("screen").width * 0.2, paddingBlock: 5}}
          >
            <Stack 
            style={{ backgroundColor: 'transparent'   }} 
            space={2} align={"center"}  >
              {route.name === "Home" && <HomeIcon width={23} height={26} fill={"red"} color={color} />}
              {route.name === "Shorts" && (
                <ShortsIcon fill={"red"} color={color} />
              )}
              {route.name === "Create" && (
                   <MaterialIcons    name="add-circle-outline" size={46} color={color} />

                // <CreateIcon fill={"red"} color={color} />
              )}
              {route.name === "Subscriptions" && (
                <SubscriptionsIcon fill={"red"} color={color} />
              )}
              {route.name === "Account" && (
                <MaterialIcons name="account-circle" size={26} color={color} />
              )}
              
              {
                route.name !== 'Create' && (
                    <Text
                    style={[
                      {
                        textAlign: "center",
                        color: theme.colors.onSurface,
                       },
                      theme.typography.labelMedium,
                      {fontSize: 10}
                    ]}
                  >
                    {label}
                  </Text>
                )

              }
             
            </Stack>
          </PlatformPressable>
        );
      })}
    </Stack>
  );
}

const YoutubeTabStack = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarHideOnKeyboard: true,
      })}
      initialRouteName="Home"
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Shorts" component={Shorts} />
      <BottomTabs.Screen name="Create" component={Create} />
      <BottomTabs.Screen name="Subscriptions" component={Subscriptions} />
      <BottomTabs.Screen name="Account" component={Account} />
    </BottomTabs.Navigator>
  );
};

export default YoutubeTabStack;

const styles = StyleSheet.create({});
