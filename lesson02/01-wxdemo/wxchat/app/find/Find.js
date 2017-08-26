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
 * 发现界面
 */
export default class Find extends Component {
  render() {
    return (
      <View style={styles.container}>
          <CommonButton
            marginTop={15}
            leftText="朋友圈"
            leftImg={require('../../imgs/ic_friends_circle.png')}
            rightImg={require('../../imgs/ic_common.png')}
            onClick={()=>{
              alert('点击')
            }}
          />

          <CommonButton
            marginTop={15}
            leftText="扫一扫"
            leftImg={require('../../imgs/ic_scan.png')}
            isShowDivider={true}
            onClick={()=>{
              alert('点击')
            }}
          />
          <CommonButton
            leftText="摇一摇"
            leftImg={require('../../imgs/ic_shake.png')}

            onClick={()=>{
              alert('点击')
            }}
          />

          <CommonButton
            marginTop={15}
            leftText="附近的人"
            leftImg={require('../../imgs/ic_nearby.png')}
            isShowDivider={true}
            onClick={()=>{
              alert('点击')
            }}
          />
          <CommonButton
            leftText="漂流瓶"
            leftImg={require('../../imgs/ic_bottle.png')}
            onClick={()=>{
              alert('点击')
            }}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e3e3e3',
  },
});
