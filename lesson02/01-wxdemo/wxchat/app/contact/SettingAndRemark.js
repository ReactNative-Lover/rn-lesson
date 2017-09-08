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
import TextAndInput from '../component/TextAndInput'

//模拟数据
const datas = [
  {id:1,title:'备注名',placeholder:'',isInput:true},
  {id:2,title:'标签',placeholder:'添加标签对联系人进行分类',isInput:false},
  {id:3,title:'电话号码',placeholder:'添加电话号码',isInput:true},
  {id:4,title:'描述',placeholder:'添加更多备注信息',isInput:true},
  {id:5,title:'附加图片',placeholder:'添加名片或相关图片',isInput:false},
]

/**
 * 设置备注及标签
 * @author TigerChain
 * @type {Object}
 */
export default class SettingAndRemark extends BaseNoTitleBarComponent {
  render() {
    const {params} = this.props.navigation.state
    //定义一个数据View
    let dataView = datas.map((item,index)=>(
        <TextAndInput
          key={index}
          data={item}
          remarkName={item.id==1?params.uname:''}
          onClick={this.onclick}
      />
    ))

    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle={params.titlename}
          rightButton='完成'
        />
        {dataView}
      </View>
    );
  }

  /**
   * 条目的事件
   * @param  {[type]} id [description]
   * @return {[type]}    [description]
   */
  onclick = (id) =>{
    const {navigate} = this.props.navigation
    switch (id) {
      //添加标签对联系人进行分类
      case 2:
        navigate('AddFlagAndCategory',{titlename:'添加标签'})
        break;
      // 添加名片或相关图片
      case 5:
        alert(id)
        break ;

      default:
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
