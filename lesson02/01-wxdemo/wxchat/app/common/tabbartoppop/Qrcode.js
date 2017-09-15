/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {QRScannerView} from 'ac-qrcode';

import Images from '../Images'
import constants from '../Constants'

import ImageButton from '../../component/ImageButton'

import CommonTitleBar from '../../component/CommonTitleBar'

/**
 * 二维码界面
 * @author TigerChain
 * @type {Object}
 */
export default class Qrcode extends Component {

  // 去掉默认的标题栏
  static navigationOptions = {
    header:null
  }

  render() {
    return (
        <QRScannerView
            bottomMenuStyle={{height: 100, backgroundColor: '#393A3F', opacity: 1}}
            hintTextPosition={170}
            hintTextStyle={{color:'#C0C0C0'}}
            maskColor={'#0000004D'}
            borderWidth={0}
            iscorneroffset={false}
            cornerOffsetSize={0}
            scanBarAnimateTime={3000}
            onScanResultReceived={this.barcodeReceived.bind(this)}

            renderTopBarView={() => {
                return (
                  <CommonTitleBar
                    nav={this.props.navigation}
                    backTitle="二维码/条码"
                    rightRimg={require('../../../imgs/wechatMore.png')}
                    onRightButtonClick={()=>{
                      alert('拍照')
                    }}
                  />
                )
            }}

                  renderBottomMenuView={() => {
                      return (
                          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                              <View style={Styles.view_bottom_menu_item}>
                                  <ImageButton
                                      style={Styles.image_bottom_menu}
                                      source={Images.ic_wechat_scan_hl}
                                  />
                                  <Text
                                      style={Styles.text_bottom_menu_item}
                                  >扫码</Text>
                              </View>

                              <View style={Styles.view_bottom_menu_item}>
                                  <ImageButton
                                      style={Styles.image_bottom_menu}
                                      source={Images.ic_wechat_scan_book}
                                  />
                                  <Text
                                      style={Styles.text_bottom_menu_item}
                                  >封面</Text>
                              </View>


                              <View style={Styles.view_bottom_menu_item}>
                                  <ImageButton
                                      style={Styles.image_bottom_menu}
                                      source={Images.ic_wechat_scan_street}
                                  />
                                  <Text
                                      style={Styles.text_bottom_menu_item}
                                  >街景</Text>
                              </View>


                              <View style={Styles.view_bottom_menu_item}>
                                  <ImageButton
                                      style={Styles.image_bottom_menu}
                                      source={Images.ic_wechat_scan_word}
                                  />
                                  <Text
                                      style={Styles.text_bottom_menu_item}
                                  >翻译</Text>
                              </View>

                          </View>
                      )
                  }}
              />

        )
  }

  barcodeReceived(e) {
      alert('Type: ' + e.type + '\nData: ' + e.data)
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image_bottom_menu: {
        height: 46,
        width: 46,
        resizeMode:'contain'
  },
  view_bottom_menu_item: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:16,
  },
  text_bottom_menu_item: {
        color: '#ffffff',
        marginTop: 8
   }
});
