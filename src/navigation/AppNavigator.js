import React from 'react';
import { View, Image, Text, Animated, Easing, TouchableOpacity, SafeAreaView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from '../screens/Splash';
import Login from './../screens/Login';
import SignUp from './../screens/SignUp';
import BottomTabNavigator from './BottomTabNavigator';
import HomeScreen from '../screens/HomeScreen';

//login
const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    })
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      header: null,
    })
  }
},
  {
    initialRouteName: 'Login',
  }
);

const AppStack = createStackNavigator({
  MainTab: {
    screen: BottomTabNavigator,
    navigationOptions: {
      header: null,
    }
  },
  // HomeScreen: {
  //   screen: HomeScreen,
  //   navigationOptions: () => ({
  //     headerShown: false,
  //   })
  // },
},
  {
    initialRouteName: 'MainTab',
  }
)

export default createAppContainer(createSwitchNavigator({
  Splash: Splash,
  Auth: AuthStack,
  App: AppStack,
}),
  {
    initialRouteName: 'Auth',
  }
);