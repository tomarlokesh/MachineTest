import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileScreen1 from '../screens/ProfileScreen1';
import ProfileScreen2 from '../screens/ProfileScreen2';
import ProfileScreen3 from '../screens/ProfileScreen3';
import BottomTabBar from '../navigation/BottomTabBar';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene, index, scenes } = sceneProps
      const toIndex = index
      const thisSceneIndex = scene.index
      const height = layout.initHeight
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0]
      })

      // Since we want the card to take the same amount of time
      // to animate downwards no matter if it's 3rd on the stack
      // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
      const translateY = position.interpolate({
        inputRange: [0, thisSceneIndex],
        outputRange: [height, 0]
      })

      const slideFromRight = { transform: [{ translateX }] }
      const slideFromBottom = { transform: [{ translateY }] }

      const lastSceneIndex = scenes[scenes.length - 1].index

      // Test whether we're skipping back more than one screen
      if (lastSceneIndex - toIndex > 1) {
        // Do not transoform the screen being navigated to
        if (scene.index === toIndex) return
        // Hide all screens in between
        if (scene.index !== lastSceneIndex) return { opacity: 0 }
        // Slide top screen down
        return slideFromBottom
      }

      return slideFromRight
    },
  }
}

export default createBottomTabNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerShown: false
    })
  },
  ProfileScreen1: {
    screen: ProfileScreen1,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  ProfileScreen2: {
    screen: ProfileScreen2,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  ProfileScreen3: {
    screen: ProfileScreen3,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  // CART: {
  //   screen: CARTStack,
  //   navigationOptions: ({ navigation }) => ({
  //     header: null,
  //   })
  // }
},
  {
    tabBarComponent: BottomTabBar,
    initialRouteName: 'HomeScreen',
    resetOnBlur: true
  });