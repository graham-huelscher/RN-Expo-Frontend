import { MainFeed, Login, Register, AuthLoading, Camera, UserActivity, Gallery } from '../screens'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const CameraStack = createStackNavigator({ Camera, Gallery })
const MainFeedStack = createStackNavigator({ MainFeed })
const UserActivityStack = createStackNavigator({ UserActivity })

const Tabs = createBottomTabNavigator({
  MainFeedStack,
  CameraStack,
  UserActivityStack
})

//const AppStack = createStackNavigator({  });
const AuthStack = createStackNavigator({ Login, Register });


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: Tabs,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);