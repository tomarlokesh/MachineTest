import React, { Component } from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Text } from 'react-native';

export default class ProfileScreen extends Component {

  render() {
    return (
      <View style={styles.containerMain}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.TextStyle}> Setting</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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