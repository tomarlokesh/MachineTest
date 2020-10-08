import * as React from "react"
import { Animated, Text, View, Image, TouchableOpacity, Keyboard, SafeAreaView } from "react-native";
import Colors from '../constants/Colors';
import Fonts from "../constants/Fonts";

const Tab = ({ title, activeImage, unactiveImage, onPress, isFocused, isShowBadge, badge_value, color }) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <View
        style={{ alignItems: 'center' }}>
        <Image style={isFocused ? {
          width: 26, height: 26,
        } : {
            width: 26, height: 26,
          }} resizeMode='contain' source={isFocused ? activeImage : unactiveImage} />
        <Text
          numberOfLines={1}
          style={{ fontFamily: Fonts.Font_Regular, fontSize: 12, textAlign: 'center', marginTop: 5, color: isFocused ? Colors.active_tabColor : Colors.unactive_tabColor, }}
        >{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

class TabBar extends React.Component {

  state = {
    isVisible: true
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove()
    this.keyboardWillHideSub.remove()
  }

  keyboardWillShow = event => {
    this.setState({
      isVisible: false
    })
  }

  keyboardWillHide = event => {
    this.setState({
      isVisible: true
    })
  }

  render() {
    const { navigation } = this.props
    const navigationState = navigation.state;
    return (this.state.isVisible ?
      <View>
        <View style={{
          height: 70,
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: "row",
          justifyContent: 'space-around',
          alignItems: 'center',
          shadowOffset: {
            width: 0,
            height: -3
          },
          shadowRadius: 5,
          shadowOpacity: 0.5,
          shadowColor: '#ccc',
          elevation: 10,
          backgroundColor: '#fff',
        }}>
          {navigationState.routes.map((route, index) => {
            if (route.routeName === 'ProfileScreen3') {
              return (
                <Tab
                  title={'Setting'}
                  activeImage={require('../assets/images/SettingSelected.png')}
                  unactiveImage={require('../assets/images/SettingUnselected.png')}
                  onPress={() => {
                    navigation.navigate(route.routeName, {})
                  }}
                  isFocused={navigationState.index == index}
                />
              )
            } else if (route.routeName === 'ProfileScreen2') {
              return (
                <Tab
                  title={'Contacts'}
                  activeImage={require('../assets/images/CallSelected.png')}
                  unactiveImage={require('../assets/images/CallUnselected.png')}
                  onPress={() => {
                    navigation.navigate(route.routeName)
                  }}
                  isFocused={navigationState.index == index}
                />
              )
            }
            else if (route.routeName === 'HomeScreen') {
              return (
                <Tab
                  title={'Home'}
                  activeImage={require('../assets/images/HomeSelected.png')}
                  unactiveImage={require('../assets/images/HomeUnselected.png')}
                  onPress={() => {
                    navigation.navigate(route.routeName)
                  }}
                  isFocused={navigationState.index == index}
                />
              )
            }
            else if (route.routeName === 'ProfileScreen1') {
              return (
                <Tab
                  title={'Camera'}
                  activeImage={require('../assets/images/CameraSelected.png')}
                  unactiveImage={require('../assets/images/CameraUnselected.png')}
                  onPress={() => {
                    navigation.navigate(route.routeName)
                  }}
                  isShowBadge
                  badge_value={3}
                  isFocused={navigationState.index == index}
                />
              )
            }
            else if (route.routeName === 'ProfileScreen') {
              return (
                <Tab
                  title={'Profile'}
                  activeImage={require('../assets/images/ProfileSelected.png')}
                  unactiveImage={require('../assets/images/ProfileUnselected.png')}
                  onPress={() => {
                    navigation.navigate(route.routeName)
                  }}
                  isFocused={navigationState.index == index}
                  color="#1DE62A"
                />
              )
            }

          })}
        </View>
        <SafeAreaView />
      </View>
      : null
    )
  }
}

export default TabBar;