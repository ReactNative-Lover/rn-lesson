/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import CommonButton from '../component/CommonButton'

/**
 * @auther TigerChain
 * @type {Object}
 */
export default class Me extends Component {
  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <CommonButton
          style={{height:70}}
          imgSize={50}
          marginTop={15}
          leftText="TigerChain"
          leftImg={require('../../imgs/avator.png')}
          rightImg={require('../../imgs/ic_qr_code.png')}
          onClick={()=>{
            navigate('PersonalInfo',{name:'个人信息'})
          }}
        />

        <CommonButton
          marginTop={15}
          leftText="钱包"
          leftImg={require('../../imgs/ic_wallet.png')}
          onClick={()=>{
            navigate('Wallet',{titleName:'我的钱包'})
          }}
        />
        <CommonButton
          marginTop={15}
          leftText="收藏"
          leftImg={require('../../imgs/ic_collect.png')}
          isShowDivider={true}
          onClick={()=>{
            navigate('Collection',{titleName:'我的收藏'})
          }}
        />
        <CommonButton
          leftText="相册"
          leftImg={require('../../imgs/ic_gallery.png')}
          isShowDivider={true}
          onClick={()=>{
            alert('点击')
          }}
        />
        <CommonButton
          leftText="卡包"
          leftImg={require('../../imgs/ic_kabao.png')}
          isShowDivider={true}
          onClick={()=>{
            alert('点击')
          }}
        />
        <CommonButton
          leftText="表情"
          leftImg={require('../../imgs/ic_emoji.png')}
          onClick={()=>{
            alert('点击')
          }}
        />

        <CommonButton
          marginTop={15}
          leftText="设置"
          leftImg={require('../../imgs/ic_settings.png')}
          onClick={()=>{
            navigate('Setting',{titleName:'设置'})
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
