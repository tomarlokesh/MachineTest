import React, { Component } from 'react';
import { Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, StatusBar, Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';
import Helper from '../Utils/helper';
import Colors from '../constants/Colors';
import { EmailInput, PasswordInput, NameInput, SubmitButton, Loader, KeyboardScrollView } from '../components';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            loading: false,
            RegisterListData: []
        }
    }

    validateInput = () => {
        if (this.state.name.trim().length == 0) {
            this.refs.name_input.shake();
            this.showToast('Please enter your Email Id');
        } else if (this.state.email.trim().length == 0) {
            this.refs.email_input.shake();
            this.showToast('Please enter your Email Id');
        } else if (!Helper.emailValidate(this.state.email)) {
            this.refs.email_input.shake();
            this.showToast('Please enter a valid email ID');
        }
        else if (this.state.password.trim().length == 0) {
            // this.refs.password_input.shake();
            this.showToast('Please enter your Password');
        }
        else if (!Helper.passwordValidate(this.state.password)) {
            // this.refs.password_input.shake();
            this.showToast('Please enter valid password');
        } else {
            return true;
        }
        return false;
    }

    callSignUp = () => {
        if (this.validateInput()) {
            AsyncStorage.getItem('RegisterList').then(value => {
                console.log('RegisterList', value)

                if (value) {
                    this.setState({ RegisterListData: JSON.parse(value) })
                } else {
                    this.setState({ RegisterListData: [] })
                }

                var jsonArrayData = [...this.state.RegisterListData];
                jsonArrayData.push({ "Name": this.state.name, "Email": this.state.email, "Password": this.state.password })
                AsyncStorage.setItem('UserInfo', JSON.stringify({ "Name": this.state.name, "Email": this.state.email, "Password": this.state.password }));
                AsyncStorage.setItem('RegisterList', JSON.stringify(jsonArrayData));
            }
            );
            this.showToast('Registered successfully');
            this.props.navigation.navigate('HomeScreen');
        } else {
            this.showToast('Please fill Details');
        }
    };

    showToast = (msg,) => {
        if (this.toast) Toast.hide(this.toast);
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
                    <Icon type='entypo' color='green' name='back' size={30} style={{ left: 0 }} onPress={() => {this.props.navigation.navigate('Login') }} />
                    <View style={{ padding: 20 }}>
                        <View style={{ width: '100%', }}>
                            <View style={{ width: '100%', backgroundColor: Colors.background_color, }}>
                                <EmailInput
                                    placeholder='Name'
                                    onSubmitEditing={() => {
                                        this.refs.name_input && this.refs.name_input.focus();
                                    }}
                                    onChangeText={(text) => {
                                        this.setState({ name: text });
                                    }}
                                />
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

                        <SubmitButton title={"Sign Up".toUpperCase()}
                            onPress={() => {
                                this.callSignUp();
                            }} />
                    </View>
                </KeyboardScrollView>
                <Loader loading={this.state.loading} />
                <SafeAreaView />
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