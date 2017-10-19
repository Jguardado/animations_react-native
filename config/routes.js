/*
NOTE: The beauty of navigator is that you can nest your various naviagtions
however youd like. For example, I can nest a StackNavigator in my Root
TabNavigator. In that StackNavigator I cna tehn nest a DrawerNavigator, and so
on an so forth
*/

import {
  DrawerNavigator,
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import Icon from 'react-native-elements';


// Screens
import Landing from '../screens/Landing';
import ContentPage from '../screens/ContentPage';
import Workouts from '../screens/Workouts';
import Equipment from '../screens/Equipment';
import Mindset from '../screens/Mindset';
import Movements from '../screens/Movements';

// NOTE: Routes/Navigators
export const System = DrawerNavigator({
  Workouts: {
    screen: Workouts,
  },
  Movements: {
    screen: Movements,
  },
  Mindset: {
    screen: Mindset,
  },
});

export const Pages = StackNavigator({
  Workouts: {
    screen: System,
  },
  Equipment: {
    screen: Equipment,
  },
});

export const Root = TabNavigator({
  Home: {
    screen: Landing,
  },
  Content: {
    screen: ContentPage,
  },
  Pages: {
    screen: Pages,
  },
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default Root;
