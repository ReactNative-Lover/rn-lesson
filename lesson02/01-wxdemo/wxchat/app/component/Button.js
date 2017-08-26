/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

/**
 * @author TigerChain
 * @type {Object}
 * 封装按钮组件 无状态组件
 */

const Button = (props) =>{
  return (
    <TouchableHighlight
      activeOpacity={0.5}
      style={{borderRadius:3}}
      onPress={()=>{
        //把事件暴露给调用者
        props.onClick()
      }}>
      <Text style={[styles.textStyle,props.style]}>{props.text}</Text>
    </TouchableHighlight>
  )
}

module.exports = Button

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle:{
    backgroundColor:'green',
    padding:8,
    borderRadius:3,
    fontSize:18,
    height:48,
    textAlign:'center',
    textAlignVertical:'center'
  }
});
