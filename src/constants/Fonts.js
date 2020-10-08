import { Platform } from 'react-native'

const android_fonts = {
    Font_BoldItalic:"Ubuntu-BoldItalic",
    Font_Light:"Ubuntu-Light",
    Font_Regular:"Ubuntu-Regular",
    Font_MediumItalic:"Ubuntu-MediumItalic",
    Font_LightItalic:"Ubuntu-LightItalic",
    Font_Medium:"Ubuntu-Medium",
    Font_Bold:"Ubuntu-Bold",
    Font_Italic:"Ubuntu-Italic",
}

const ios_fonts = {
    Font_BoldItalic:"Ubuntu-BoldItalic",
    Font_Light:"Ubuntu-Light",
    Font_Regular:"Ubuntu-Regular",
    Font_MediumItalic:"Ubuntu-MediumItalic",
    Font_LightItalic:"Ubuntu-LightItalic",
    Font_Medium:"Ubuntu-Medium",
    Font_Bold:"Ubuntu-Bold",
    Font_Italic:"Ubuntu-Italic",
}

export default Platform.OS === 'ios' ? ios_fonts : android_fonts