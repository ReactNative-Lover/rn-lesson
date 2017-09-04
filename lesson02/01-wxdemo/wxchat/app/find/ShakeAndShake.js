/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import CommonTitleBar from '../component/CommonTitleBar'
import Screen from '../common/Screen'


import RNShakeEvent from 'react-native-shake-event';

/**摇一摇界面
 * @author TigerChain
 * @type {Object}
 */
export default class ShakeAndShake extends Component {

  // 隐藏掉 TitleBar 当然也可以设置，一个个设置有点复，我们封装一个组件
  static navigationOptions = {
    header:null
  }

  componentWillMount(){
    RNShakeEvent.addEventListener('shake', () => {
     alert('老子摇了')
   });
  }

  componentWillUnmount() {
    RNShakeEvent.removeEventListener('shake');
  }

  render() {

    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle={params.name}
          rightRimg={require('../../imgs/ic_add.png')}
          onRightButtonClick={()=>{
            alert('拍照')
          }}
        />

        <View style={styles.shakeView}>
          <View style={{alignItems:'center'}}>
            <Image source={require('../../imgs/shake_top.png')}  style={{height:100,width:180}}></Image>
            <View style={styles.dividerStyle}></View>
          </View>

          <View style={{alignItems:'center'}}>
            <View style={styles.dividerStyle}></View>
           <Image source={require('../../imgs/shake_bottom.png')}  style={{height:100,width:180}}></Image>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#46494F'
  },
  shakeView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  dividerStyle:{
    backgroundColor:'#333333',
    width:Screen.width,
    height:5
  }
});
