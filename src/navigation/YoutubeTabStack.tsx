import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/home'
import Create from '../pages/create'
import Shorts from '../pages/shorts'
import Subscriptions from '../pages/subscriptions'
import Account from '../pages/account'

const BottomTabs = createBottomTabNavigator<YoutubeTabStackParamList>()

const YoutubeTabStack = () => {
  return (
     <BottomTabs.Navigator screenOptions={{headerShown: false}}>
        <BottomTabs.Screen name='Home' component={Home} />
        <BottomTabs.Screen name='Create' component={Create} />
        <BottomTabs.Screen name='Shorts' component={Shorts} />
        <BottomTabs.Screen name='Subscriptions' component={Subscriptions} />
        <BottomTabs.Screen name='Account' component={Account} />
     </BottomTabs.Navigator>
  )
}

export default YoutubeTabStack

const styles = StyleSheet.create({})