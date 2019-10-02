import { MainFeed, Login, AuthLoading, Camera, UserActivity } from '../screens'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const Tabs = createBottomTabNavigator({
  MainFeed,
  Camera,
  UserActivity
},
  {
    initialRouteName: 'MainFeed',
  })

const AppStack = createStackNavigator({ Tabs });
const AuthStack = createStackNavigator({ Login });


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
      navigationOptions: {
        title: "Instagram"
      }
    }
  )
);