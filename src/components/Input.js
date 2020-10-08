import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
// import Icon from 'react-native-vector-icons/Entypo';

class EmailInput extends React.Component {

    state = {
        isFocused: false,
        text: ''
    }

    focus() {
        this.refs.input.focus();
    }

    blur() {
        this.refs.input.blur();
    }

    clear() {
        this.refs.input.clear();
    }

    isFocused() {
        return this.refs.input.isFocused();
    }

    shake() {
        return this.refs.input.shake();
    }

    render() {
        const { placeholder, ref, onSubmitEditing, onChangeText } = this.props;

        return (
            <Input
                ref={'input'}
                {...this.props}
                placeholder={placeholder ? placeholder : "Email"}
                placeholderTextColor={Colors.placeholder_color}
                returnKeyType='next'
                blurOnSubmit={false}
                onSubmitEditing={onSubmitEditing ? onSubmitEditing : () => { }}
                onChangeText={onChangeText ? onChangeText : (text) => { this.setState({ text }) }}
                onFocus={() => {
                    this.setState({ isFocused: this.refs.input.isFocused() });
                }}
                onBlur={() => {
                    this.setState({ isFocused: this.refs.input.isFocused() });
                }}
                containerStyle={styles.input}
                //containerStyle={this.state.isFocused ? styles.focusedInput : styles.input}
                inputContainerStyle={{
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.placeholder_color,
                }}
                inputStyle={{
                    fontSize: 15,
                    fontFamily: Fonts.Font_Regular,
                    marginRight: 10,
                    paddingBottom: 0,
                    color: Colors.placeholder_color,
                    placeholderTextColor: Colors.placeholder_color
                }}
            />
        );
    }
}

class PasswordInput extends React.Component {

    state = {
        isFocused: false,
        hidePassword: true,
        text: ''
    }

    focus() {
        this.refs.input.focus();
    }

    blur() {
        this.refs.input.blur();
    }

    clear() {
        this.refs.input.clear();
    }

    isFocused() {
        return this.refs.input.isFocused();
    }

    render() {
        const { placeholder, ref, onSubmitEditing, onChangeText } = this.props;
        return (
            <Input
                ref={'input'}
                {...this.props}
                placeholderTextColor={Colors.placeholder_color}
                placeholder={placeholder ? placeholder : "Password"}
                secureTextEntry={this.state.hidePassword}
                onSubmitEditing={onSubmitEditing ? onSubmitEditing : () => { }}
                onChangeText={onChangeText ? onChangeText : (text) => { this.setState({ text }) }}
                onFocus={() => {
                    this.setState({ isFocused: this.refs.input.isFocused() });
                }}
                onBlur={() => {
                    this.setState({ isFocused: this.refs.input.isFocused() });
                }}
                containerStyle={styles.input}
                //containerStyle={this.state.isFocused ? styles.focusedInput : styles.input}
                inputContainerStyle={{
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.placeholder_color
                }}
                inputStyle={{
                    fontSize: 15,
                    fontFamily: Fonts.Font_Regular,
                    // marginLeft:10,
                    marginRight: 10,
                    paddingBottom: 0,
                    color: Colors.placeholder_color,
                    placeholderTextColor: Colors.placeholder_color
                }}
                rightIcon={<Icon type='entypo' color={this.state.hidePassword ? 'black' : 'green'} name={this.state.hidePassword ? 'eye-with-line' : 'eye'} onPress={() => { this.setState({ hidePassword: !this.state.hidePassword }) }} />}
            />
        );
    }
}

class NameInput extends React.Component {

    // state = {
    //     isFocused: false,
    //     text: ''
    // }

    // focus() {
    //     this.refs.input.focus();
    // }

    // blur() {
    //     this.refs.input.blur();
    // }

    // clear() {
    //     this.refs.input.clear();
    // }

    // isFocused() {
    //     return this.refs.input.isFocused();
    // }

    render() {
        const { placeholder, ref, onSubmitEditing, onChangeText } = this.props;
        return (
            <Input
                // ref={'input'}
                // {...this.props}
                placeholderTextColor={Colors.placeholder_color}
                placeholder={placeholder ? placeholder : "Name"}
                onSubmitEditing={onSubmitEditing ? onSubmitEditing : () => { }}
                onChangeText={onChangeText ? onChangeText : (text) => { this.setState({ text }) }}
                onFocus={() => {
                    this.setState({ isFocused: this.refs.input.isFocused() });
                }}
                onBlur={() => {
                    this.setState({ isFocused: this.refs.input.isFocused() });
                }}
                containerStyle={styles.input}
                //containerStyle={this.state.isFocused ? styles.focusedInput : styles.input}
                inputContainerStyle={{
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.placeholder_color
                }}
                inputStyle={{
                    fontSize: 15,
                    fontFamily: Fonts.Font_Regular,
                    // marginLeft:10,
                    marginRight: 10,
                    paddingBottom: 0,
                    color: Colors.placeholder_color,
                    placeholderTextColor: Colors.placeholder_color
                }}
               />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 5
    }
})

export {
    EmailInput,
    PasswordInput,
    NameInput
};
