import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Appp extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', marginHorizontal: 5, alignItems:'center' }}>
                <View style={{ height: 0, borderWidth: 1, width:'30%' }} />
                <Text style={{ marginHorizontal: 5,}}>or</Text>
                <View style={{ height: 0, borderWidth: 1, width:'30%' }} />
            </View>
        );
    }
}