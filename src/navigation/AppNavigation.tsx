import React from 'react';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from  'react-navigation-stack';
import {createBottomTabNavigator} from  'react-navigation-tabs';
import {BookedScreen} from '../screens/BookedScreen';
import {MainScreen} from '../screens/MainScreen';
import {PostScreen} from '../screens/PostScreen';
import {THEME} from '../theme';


const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: {
    screen: PostScreen,
  }
}, {
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.COLORS_MAIN : THEME.COLORS_WHITE,
    },
    headerTintColor: Platform.OS === 'android' ? THEME.COLORS_WHITE: THEME.COLORS_MAIN,
  }
});

const BookedNavigator = createStackNavigator({
  Booked: BookedScreen,
  Post: PostScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.COLORS_MAIN : THEME.COLORS_WHITE,
    },
    headerTintColor: Platform.OS === 'android' ? THEME.COLORS_WHITE: THEME.COLORS_MAIN,
  }
});

const BottomTabNavigator = createBottomTabNavigator({
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: (info) => (<Ionicons name="ios-albums" size={25} color={info.tintColor} />),
    },
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarIcon: (info) => (<Ionicons name="ios-star" size={25} color={info.tintColor}/>),
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: THEME.COLORS_MAIN,
  }
})

export const AppNavigation = createAppContainer(BottomTabNavigator);
