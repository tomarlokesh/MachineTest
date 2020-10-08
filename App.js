import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/redux/store/store';

import * as Action from './src/redux/action';
import { connect } from 'react-redux';
//import Constant from './src/constants/Constant';

console.disableYellowBox = true;
console.reportErrorsAsExceptions = false;

store.dispatch(Action.getInitialUser());

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator/>
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
    setting: state.setting
  }
}

const SafeApp = connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%'
  },

});

export default class MainApp extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <SafeApp />
      </Provider>
    );
  }
}