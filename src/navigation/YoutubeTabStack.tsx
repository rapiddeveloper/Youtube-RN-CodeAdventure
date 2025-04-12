import { StyleSheet, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/home'
import Create from '../pages/create'
import Shorts from '../pages/shorts'
import Subscriptions from '../pages/subscriptions'
import Account from '../pages/account'
import HomeIcon from '../components/Icons/HomeIcon'
import CreateIcon from '../components/Icons/CreateIcon'
import ShortsIcon from '../components/Icons/ShortsIcon'
import SubscriptionsIcon from '../components/Icons/SubscriptionsIcon'

const BottomTabs = createBottomTabNavigator<YoutubeTabStackParamList>()

const YoutubeTabStack = () => {

  return (
     <BottomTabs.Navigator screenOptions={({route})=>({
        headerShown: false,
        tabBarIcon: ({focused, color, size})=>{ 
          let iconName: string = '';
          switch (route.name) {
            case 'Home':
              return <HomeIcon fill={'red'} />
              case 'Shorts':
                return <ShortsIcon fill={'red'} />
            case 'Create':
                return <CreateIcon fill={'red'} />
          
            case 'Subscriptions':
                return <SubscriptionsIcon fill={'red'} />
            case 'Account':
                return <MaterialIcons name="account-circle" size={24} color="black" />
          }
        }
     })}>
        <BottomTabs.Screen  name='Home' component={Home} />
        <BottomTabs.Screen name='Shorts' component={Shorts} />
        <BottomTabs.Screen name='Create' component={Create} />
        <BottomTabs.Screen name='Subscriptions' component={Subscriptions} />
        <BottomTabs.Screen name='Account' component={Account} />
     </BottomTabs.Navigator>
  )
}

export default YoutubeTabStack

const styles = StyleSheet.create({})