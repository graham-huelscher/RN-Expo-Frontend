import { MainFeed, Login, Register, AuthLoading, Camera, UserActivity, Gallery1 } from '../screens'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const CameraStack = createStackNavigator({Camera, Gallery1}, {headerMode: "none"})

const Tabs = createBottomTabNavigator({
  MainFeed,
  CameraStack,
  UserActivity
},
  {
    initialRouteName: 'MainFeed',
    navigationOptions: {
      title: "Expo"
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