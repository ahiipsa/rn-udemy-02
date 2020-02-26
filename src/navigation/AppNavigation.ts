import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from  'react-navigation-stack';
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


export const AppNavigation = createAppContainer(PostNavigator);
