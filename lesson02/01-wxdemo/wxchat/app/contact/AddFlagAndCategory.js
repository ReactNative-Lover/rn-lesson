/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

//导入没有 TitleBar 的父组件
import BaseNoTitleBarComponent from '../common/BaseNoTitleBarComponent'
import CommonTitleBar from '../component/CommonTitleBar'
import DashedBorderInput from '../component/DashedBorderInput'
import Screen from '../common/Screen'
import BorderText from '../component/BorderText'

/**
 * 添加标签或给联系人打标签
 * @author TigerChain
 * @type {Object}
 */
export default class AddFlagAndCategory extends BaseNoTitleBarComponent {

  render() {
    const {params} = this.props.navigation.state
    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle={params.titlename}
          rightButton='保存'
          onLeftPerButtonClick={this._onLeftPerButtonClick}
        />
        <View style={{paddingLeft:10,paddingRight:10,marginTop:10}}>
          <DashedBorderInput />
          <View style={{height:Screen.onePixel,backgroundColor:'#d4d4d4',marginTop:7}}></View>
          <View style={{flexWrap:'wrap',flexDirection:'row',alignItems:'flex-start'}}>
              <BorderText text={'测试'}/>
              <BorderText text={'测试'}/>
              <BorderText text={'测试'}/>
              <BorderText text={'测试'}/>
              <BorderText text={'测试'}/>
              <BorderText text={'测试'}/>
              <BorderText text={'测试测试'}/>
          </View>

        </View>
      </View>
    );
  }
  /**
   * 保存按钮事件
   * @return {[type]} [description]
   */
  _onLeftPerButtonClick = ()=>{
    alert('1')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
