/* @flow weak */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import CommonTitleBar from '../component/CommonTitleBar'
import CommonButton from '../component/CommonButton'


/**
 * 个人信息
 * @author TigerChain
 * @type {Object}
 */
export default class PersonalInfo extends PureComponent {

  // 隐藏掉 TitleBar 当然也可以设置，一个个设置有点复，我们封装一个组件
  static navigationOptions = {
    header:null
  }

  render() {
    // 取得导航组件传过来的参数
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle={params.name}
        />

        <CommonButton
          marginTop={15}
          leftText="头像"
          rightImgSize={50}
          rightImg={require('../../imgs/avator.png')}
          isShowDivider={true}
          onClick={()=>{
            // navigate('FriendCircle',{name:'朋友圈'})
            alert('头像')
          }}
        />

        <CommonButton
          style={styles.commonBtnStyle}
          leftText="昵称"
          rightText="TigerChain"
          isShowDivider={true}
          onClick={()=>{
            alert('昵称')
          }}
        />

        <CommonButton
          style={styles.commonBtnStyle}
          leftText="微信号"
          rightText="未设置"
          isShowDivider={true}
          onClick={()=>{
            alert('昵称')
          }}
        />

        <CommonButton
          style={styles.commonBtnStyle}
          leftText="二维码名片"
          isShowDivider={true}
          rightImg={require('../../imgs/ic_qr_code.png')}
          onClick={()=>{
            alert('二维码名片')
          }}
        />
        <CommonButton
          style={styles.commonBtnStyle}
          leftText="更多"
          onClick={()=>{
            alert('更多')
          }}
        />
        <CommonButton
          style={styles.commonBtnStyle}
          marginTop={15}
          leftText="我的地址"
          onClick={()=>{
            alert('我的地址')
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
  commonBtnStyle:{
    height:45
  }
});
