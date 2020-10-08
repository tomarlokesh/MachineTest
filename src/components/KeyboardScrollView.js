import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class KeyboardScrollView extends React.Component {
    render() {
        const {
            style,
            enableAutomaticScroll,
            enableOnAndroid,
            contentContainerStyle,
            resetScrollToCoords,
            scrollEnabled,
            extraScrollHeight,
            keyboardShouldPersistTaps,
            children,
            ...otherProps
        } = this.props;
        return (
            <KeyboardAwareScrollView
                style={style ? style : { flex: 1 }}
                enableAutomaticScroll={enableAutomaticScroll}
                enableOnAndroid={enableOnAndroid}
                contentContainerStyle={contentContainerStyle ? contentContainerStyle : { flexGrow: 1 }}
                resetScrollToCoords={resetScrollToCoords ? resetScrollToCoords : { x: 0, y: 0 }}
                scrollEnabled={scrollEnabled ? scrollEnabled : true}
                extraScrollHeight={extraScrollHeight ? extraScrollHeight : 50}
                keyboardShouldPersistTaps={keyboardShouldPersistTaps ? keyboardShouldPersistTaps : 'handled'}
                {...otherProps}>
                {children}
            </KeyboardAwareScrollView>
        );
    }
}