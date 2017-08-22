/*
  @auther:TigerChain
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image
} from 'react-native';

/**
 * 自定义按钮
 * @type {Object}
 */
export default class CustomButton extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.textStyle}>原始 button</Text>
          <Button
            // 点击事件
            onPress={()=>{
              alert('点击也')
            }}
            //标题
          title="点击我"/>
            <Text style={styles.textStyle}>使用TouchableOpacity自定义button</Text>
          <TouchableOpacity
            //点击下去的透明度，默认是 0.2
            activeOpacity={0.5}
             onPress={()=>{
               alert('自定义按钮')
             }}
            >
              <Text style={styles.customButtonTextStyle}>点击我</Text>
          </TouchableOpacity>
          <Text style={styles.textStyle}>使用TouchableOpacity自定义button带样式</Text>
          <TouchableOpacity
            //点击下去的透明度，默认是 0.2
            activeOpacity={0.5}
             onPress={()=>{
               alert('自定义按钮')
             }}
            >
              <Text style={styles.customButtonTextStyle2}>点击我</Text>
            </TouchableOpacity>

            <Text style={styles.textStyle}>使用TouchableHighlight自定义button带样式</Text>
            <TouchableHighlight
              style={styles.TouchableHighlightStyle}
              activeOpacity={0.5}
              underlayColor='#ffeecc'
              onPress={() =>{
                alert('click me')
              }}>
              <View style={styles.TouchableHighlightViewStyle}>
                <Text style={styles.TouchableHighlightTextStyle}>click me</Text>
              </View>
            </TouchableHighlight>

          <Text style={styles.textStyle}>使用TouchableHighlight自定义带图片的button样式</Text>
          <TouchableHighlight
            style={{backgroundColor:'orange',margin:5}}
            activeOpacity={0.5}
            underlayColor='#ffeecc'
            onPress={() =>{
              alert('click me')
            }}>
            <View style={styles.TouchableHighlightViewStyle2}>
              <Image source={require('./imgs/login.png')} style={{height:30,width:30,margin:5}}/>
              <View style={{flex:1}}>
                <Text style={[styles.TouchableHighlightTextStyle,{marginRight:35}]}>click me</Text>
              </View>
            </View>
          </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  // 文本的样式
  textStyle:{
    margin:5,
    color:'red',
    fontSize:16
  },
  // button 上文字的样式
  customButtonTextStyle:{
    backgroundColor:'red',
    textAlign:'center',
    padding:15,
    margin:5,
  },
  customButtonTextStyle2:{
    backgroundColor:'#aaccdd',
    textAlign:'center',
    padding:15,
    margin:5,
    borderRadius:10
  },
  // TouchableHighlight 的样式
  TouchableHighlightStyle:{
    backgroundColor:'green',
    margin:5,
  },
  TouchableHighlightViewStyle:{
    height:48,
    justifyContent:'center',

  },
  TouchableHighlightViewStyle2:{
    height:48,
      flexDirection:'row',
      alignItems:'center'
  },
  TouchableHighlightTextStyle:{
    textAlign:'center'
  }
});
