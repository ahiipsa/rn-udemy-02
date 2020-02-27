import React from 'react';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from  'react-navigation-stack';
import {createBottomTabNavigator} from  'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from  'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from  'react-navigation-drawer';
import {AboutScreen} from '../screens/AboutScreen';
import {BookedScreen} from '../screens/BookedScreen';
import {CreateScreen} from '../screens/CreateScreen';
import {MainScreen} from '../screens/MainScreen';
import {PostScreen} from '../screens/PostScreen';
import {THEME} from '../theme';


const navigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.COLORS_MAIN : THEME.COLORS_WHITE,
    },
    headerTintColor: Platform.OS === 'android' ? THEME.COLORS_WHITE: THEME.COLORS_MAIN,
  }
};

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: PostScreen,
}, navigationOptions);

const BookedNavigator = createStackNavigator({
  Booked: BookedScreen,
  Post: PostScreen,
}, navigationOptions);

const bottomTabConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'All',
      tabBarIcon: (info) => (<Ionicons name="ios-albums" size={25} color={info.tintColor} />),
    },
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Booked',
      tabBarIcon: (info) => (<Ionicons name="ios-star" size={25} color={info.tintColor}/>),
    }
  }
};

const BottomTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(bottomTabConfig, {
    activeColor: THEME.COLORS_WHITE,
    barStyle: {
      backgroundColor: THEME.COLORS_MAIN,
    }
  })
  : createBottomTabNavigator(bottomTabConfig, {
    tabBarOptions: {
      activeTintColor: THEME.COLORS_MAIN,
    }
  });

const AboutNavigator = createStackNavigator({
  About: AboutScreen,
}, navigationOptions);

const CreateNavigator = createStackNavigator({
  Create: CreateScreen,
}, navigationOptions);

const MainNavigator = createDrawerNavigator({
  PostTabs: {
    screen: BottomTabNavigator,
    navigationOptions: {
      drawerLabel: 'Main',
      drawerIcon: <Ionicons name="ios-star" />
    }
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      drawerLabel: 'About app'
    }
  },
  Create: {
    screen: CreateNavigator,
    navigationOptions: {
      drawerLabel: 'Create Post'
    }
  }
}, {
  contentOptions: {
    activeTintColor: THEME.COLORS_MAIN,
    labelStyle: {
      fontFamily: 'opensans-bold',
    }
  }
});

export const AppNavigation = createAppContainer(MainNavigator);
