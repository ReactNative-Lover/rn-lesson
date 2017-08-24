

import { Dimensions, Platform, PixelRatio } from 'react-native'

export default {
    //屏幕的宽度
    width: Dimensions.get('window').width,
    //屏幕的高度
    height: Dimensions.get('window').height,
    onePixel: 1 / PixelRatio.get(),
    // IOS 中的状态栏高度
    statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
}
