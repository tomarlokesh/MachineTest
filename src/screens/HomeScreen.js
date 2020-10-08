import React, { Component } from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Password: '',
      loading: false,
      RegisterListData: [],

    }
  }

  componentDidMount() {
    AsyncStorage.getItem('UserInfo').then(value => {
      console.log('RegisterList', JSON.parse(value));
      this.setState({
        RegisterListData: JSON.parse(value),
        Name: this.state.RegisterListData.Name,
        Email: this.state.RegisterListData.Email,
        Password: this.state.RegisterListData.Password
      })
      console.log(this.state.RegisterListData.Name)
    }
    );
  }
  render() {
    return (
      <View style={styles.containerMain}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}>
          <Text style={styles.TextStyle}>HomeScreen</Text>
        </TouchableOpacity>
        <Text>name:{this.state.Name}</Text>
        <Text>email:{this.state.Email}</Text>
        <Text>password:{this.state.Password}</Text>

        <TouchableOpacity
          onPress={() =>{ AsyncStorage.remove('UserInfo');
          this.props.navigation.navigate('Login')}}
          activeOpacity={0.6}
          style={styles.button}>
          <Text style={styles.TextStyle}>Logout</Text>
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
    marginVertical: 10,
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);