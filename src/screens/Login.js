import React, { Component } from 'react';
import { Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, StatusBar, Keyboard, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-root-toast';
import Helper from '../Utils/helper';
import Colors from '../constants/Colors';
import { EmailInput, PasswordInput, SubmitButton, Loader, KeyboardScrollView } from '../components';

const { height, width } = Dimensions.get('window');

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      RegisterList : [],
    }
  }

  validateInput = () => {
    if (this.state.email.trim().length == 0) {
      this.refs.email_input.shake();
      this.showToast('Please enter your Email Id');
    } else if (!Helper.emailValidate(this.state.email)) {
      this.refs.email_input.shake();
      this.showToast('Please enter a valid email ID');
    }
    else if (this.state.password.trim().length == 0) {
      this.showToast('Please enter your Password');
    }
    else if (!Helper.passwordValidate(this.state.password)) {
      this.showToast('Please enter valid password');
    } else {
      return true;
    }
    return false;
  }

  callLogin = () => {
    if (this.validateInput()) {
        AsyncStorage.getItem('RegisterList').then(value => {
            console.log('RegisterList', value)

            if (value) {
                this.setState({ RegisterListData: JSON.parse(value) },()=>{

                  this.state.RegisterList.map((Val)=>{

                    if(Val.Email === this.state.email && Val.Password === this.state.password){
                      AsyncStorage.setItem('UserInfo', JSON.stringify(Val));
                      this.showToast('You have Successfully Login');
                      this.props.navigation.navigate('Home');

                    }
                    else{
                      this.showToast('Invalid Credential!');

                    }

                  })

                })


            } else {
                this.setState({ RegisterListData: [] },()=>{    this.showToast('You have Not Registered Yet!');
                this.props.navigation.navigate('SignUp');})
            }

            //var jsonArrayData = [...this.state.RegisterListData];
           // jsonArrayData.push({ "Name": this.state.name, "Email": this.state.email, "Password": this.state.password })
           // AsyncStorage.setItem('RegisterList', JSON.stringify(jsonArrayData));
        }
        );
        this.showToast('Registered successfully');
        this.props.navigation.navigate('HomeScreen');
    } else {
        this.showToast('Please fill Details');
    }
};


  showToast = (msg,) => {
    this.toast = Toast.show(msg, {
      duration: 1500,
      position: Toast.positions.BOTTOM,
      backgroundColor: 'red',
      textColor: '#FFF',
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <SafeAreaView />
        <KeyboardScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ padding: 20 }}>
            <View style={{ width: '100%', }}>
              <View style={{ width: '100%', backgroundColor: Colors.background_color, }}>
                <EmailInput ref='email_input'
                  onSubmitEditing={() => {
                    this.refs.password_input && this.refs.password_input.focus();
                  }}
                  onChangeText={(text) => {
                    this.setState({ email: text });
                  }}
                />
                <PasswordInput ref='password_input'
                  onSubmitEditing={() => {
                    this.callLogin();
                  }}
                  onChangeText={(text) => {
                    this.setState({ password: text });
                  }}
                />
              </View>
            </View>

            <SubmitButton title={"Log in".toUpperCase()}
              onPress={() => {
                this.callLogin();
              }} />
            <View style={{flexDirection:'row', justifyContent:'center'}}>
            <Text>Already registered, </Text>
              <Text onPress={() => this.props.navigation.navigate('SignUp')} style={{ textDecorationLine: 'underline', color:'green' }}>Signin here</Text>
            </View>
          </View>
        </KeyboardScrollView>
        <Loader loading={this.state.loading} />
        <SafeAreaView />
      </View>
    )
  }
}

