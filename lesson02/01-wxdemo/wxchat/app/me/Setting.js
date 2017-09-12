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
import CommonButton from '../component/CommonButton'

/**
 * 设置界面 这里我手动设置了，其实可以使用 listView 或是 sectionList 或flatlist 或是 for 循环取值再设置组件，自行试验吧
 * @author TigerChain
 * @type {Object}
 */
export default class Setting extends BaseNoTitleBarComponent {
  render() {
    const {params} = this.props.navigation.state
    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle={params.titleName}
        />
        <CommonButton
          style={styles.itemView}
          marginTop={15}
          leftText="新消息提醒"
          isShowDivider={true}
          onClick={()=>{
            alert('新消息提醒')
          }}
        />
        <CommonButton
          style={styles.itemView}
          leftText="勿扰模式"
          isShowDivider={true}
          onClick={()=>{
            alert('勿扰模式')
          }}
        />
        <CommonButton
          style={styles.itemView}
          leftText="聊天"
          isShowDivider={true}
          onClick={()=>{
            alert('聊天')
          }}
        />
        <CommonButton
          style={styles.itemView}
          leftText="隐私"
          isShowDivider={true}
          onClick={()=>{
            alert('隐私')
          }}
        />
        <CommonButton
          style={styles.itemView}
          leftText="通用"
          isShowDivider={true}
          onClick={()=>{
            alert('通用')
          }}
        />
        <CommonButton
          style={styles.itemView}
          leftText="账号与安全"
          rightText="已保护"
          onClick={()=>{
            alert('账号与安全')
          }}
        />

        <CommonButton
          style={styles.itemView}
          marginTop={15}
          leftText="关于微信"
          isShowDivider={true}
          onClick={()=>{
            alert('关于微信')
          }}
        />
        <CommonButton
          style={styles.itemView}
          leftText="帮助与反馈"
          onClick={()=>{
            alert('帮助与反馈')
          }}
        />

        <CommonButton
          style={styles.itemView}
          marginTop={15}
          leftText="插件"
          onClick={()=>{
            alert('插件')
          }}
        />

        <CommonButton
          style={styles.itemView}
          marginTop={15}
          leftText="退出"
          onClick={()=>{
            alert('退出')
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
  itemView:{
    height:45
  }
});
