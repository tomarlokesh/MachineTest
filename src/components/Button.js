import React from 'react';
import { StyleSheet,} from 'react-native';
import { Button } from 'react-native-elements';
import Fonts from '../constants/Fonts';
import LinearGradient from 'react-native-linear-gradient';

class SubmitButton extends React.Component {
    render() {
        const { containerStyle, color, buttonStyle, textColor, disable, ...otherProps } = this.props
        return (
            <Button
                transparent
                containerStyle={[styles.container, containerStyle]}
                // onLongPress={backgroundColo='#fff'}
                buttonStyle={[disable ? styles.inactiveButton : styles.activeButton, buttonStyle]}
                ViewComponent={LinearGradient}
                // activeOpacity={1}
                linearGradientProps={{
                    colors: color?color:['green', 'black'],
                   
                    backgroundColor: '#fff'

                }}
                disabled={disable}
                titleProps={{numberOfLines:2}}
                disabledTitleStyle={{
                    fontSize: 18,
                    color: textColor ? textColor : '#fff',
                    fontFamily: Fonts.Font_Regular,
                }}
                titleStyle={{
                    fontSize: 18,
                    color: textColor ? textColor : '#fff',
                    fontFamily: Fonts.Font_Regular,
                }}
                {...otherProps}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 25,
        overflow: 'hidden'
    },
});

export { SubmitButton}