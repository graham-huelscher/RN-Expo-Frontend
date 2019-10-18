import { MainFeed, Login, Register, AuthLoading, Camera, UserActivity } from '../screens'
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
    navigationOptions: {
      title: "instagram"
    }

  })

const AppStack = createStackNavigator({ Tabs });
const AuthStack = createStackNavigator({ Login, Register });


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);