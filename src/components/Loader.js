import React from 'react';
import {View,ActivityIndicator} from 'react-native';
import Colors from '../constants/Colors';

const Loader = (props) => {
    return (
        props.loading ? <View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: '#00000090', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' />
        </View>
            : null
    );
}

export { Loader };