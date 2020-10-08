import React, { Component } from 'react';
import { Dimensions, Image, ImageBackground, Alert, SafeAreaView, StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const { height, width } = Dimensions.get('window');

class SPLASH extends React.Component {

  componentDidMount() {
    AsyncStorage.getItem('RegisterList').then(value => {
      if (value) {
        setTimeout(() => {
          this.props.navigation.navigate('App');
        }, 2000);
      } else {
        setTimeout(() => {
          this.props.navigation.navigate('Auth');
        }, 2000);
      }
    })
  }

  render() {
    return (
      <View style={{ backgroundColor: 'purple', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 20 }}>SPLASH SCREEN</Text>
      </View>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },

  button: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#EE5407',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    user: state.user
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {

  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(SPLASH);