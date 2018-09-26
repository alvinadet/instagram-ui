import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";
import {Home, Profile, Add, Like, Search} from "./page";
import {Icon} from 'native-base'



export const Layout = createBottomTabNavigator({
  Home: {
    screen: Home
  },

  Search: {
    screen: Search
  },
  Add: {
    screen: Add,
    
  },
  Like: {
    screen: Like,
    navigationOptions: {
      tabBarLabel: "like",
      tabBarIcon: () => (
        <Icon name="heart" />
      )
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: () => (
        <Icon name="person" />
      )
    },
  },
},{
  animationEnabled : true,
  swipeEnabled : true,
  tabBarOptions :{
    showLabel : false,
    paddingBottom: 100,
    activeBackgroundColor: 'red',
    inactiveBackgroundColor : 'white'
  }
});