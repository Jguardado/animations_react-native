/*
NOTE: The beauty of navigator is that you can nest your various naviagtions
however youd like. For example, I can nest a StackNavigator in my Root
TabNavigator. In that StackNavigator I cna tehn nest a DrawerNavigator, and so
on an so forth
*/

import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import { Icon } from 'react-native-elements';

console.log('what is Icon: ', Icon);

// Screens
import Landing from '../screens/Landing';
import ContentPage from '../screens/ContentPage';
import Workouts from '../screens/Workouts';
import Equipment from '../screens/Equipment';
import Mindset from '../screens/Mindset';
import Movements from '../screens/Movements';

// NOTE: Routes/Navigators
export const DetailsTabs = TabNavigator({
  Mindset: {
    screen: Mindset,
  },
  Equipment: {
    screen: Equipment,
  },
}, {
  tabBarPosition: 'top',
});

export const SystemStack = StackNavigator({
  Workouts: {
    screen: Workouts,
    navigationOptions: {
      title: 'Workouts',
    },
  },
  Movements: {
    screen: DetailsTabs,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.exercise.toUpperCase()}`,
    }),
  },
});

export const Pages = StackNavigator({
  Workouts: {
    screen: SystemStack,
    navigationOptions: {
      title: 'Explore',
    },
  },

},
{
  headerMode: 'none',
});

export const Root = TabNavigator({
  Homet: {
    screen: ContentPage,
    tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
    tabBarLabel: 'Home',
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
