/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from 'react-native';

import Screen from '../common/Screen'

/**
 * @author TigerChain
 * 定义文本和输入框组件 备注信息中使用
 * @type {Object}
 */

export default class TextAndInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      //是否显示删除图片
      isShwoClear:false,
      //传过来的备注名称，其实这里只有第一个有
      text:this.props.remarkName,
      //文本框的底部边框颜色
      textInputBottomColor:'#d4d4d4'
    }
  }

  render() {
    //定义一个数据View
    let dataView = []
      if(this.props.data.isInput){
        dataView.push(
          <View style={styles.itemView} key={this.props.data.id}>
            <Text style={styles.textStyle}>{this.props.data.title}</Text>
            <View style={{height:50, borderBottomWidth:1,borderBottomColor:this.state.textInputBottomColor,flexDirection:'row',alignItems:'center'}}>
              <TextInput
                style={{paddingLeft:10,fontSize:16,width:Screen.width*0.82,height:50,textAlignVertical:'center',marginBottom:-10}}
                placeholder={this.props.data.placeholder}
                selectionColor="#2E8B57"
                ref={input => { this.textInput = input }}
                onFocus={()=>{
                  //如果文本框有内容并且选中的事件
                    if(this.state.text.length>0){
                      this.setState({
                        textInputBottomColor:'#2E8B57',
                        isShwoClear:true
                      })
                    }else{
                      this.setState({
                        textInputBottomColor:'#2E8B57',
                      })
                    }
                }}
                //失去焦点事件
                onBlur={()=>{
                  this.setState({
                    textInputBottomColor:'#d4d4d4',
                    isShwoClear:false
                  })
                }}
                onChangeText={(txt)=>{
                  if(txt.length>0){
                    this.setState({
                      text:txt,
                      isShwoClear:true
                    })
                  }else{
                    this.setState({
                      text:'',
                      isShwoClear:false
                    })
                  }
                }}
                value={this.state.text}
                underlineColorAndroid="transparent"/>
                {this.state.isShwoClear?
                  <TouchableOpacity
                    style={{height:20}}
                    onPress={()=>{this.clearContent()}}
                    >
                    <Image
                      source={require('../../imgs/clear.png')}
                      style={{height:12,height:12,marginBottom:-10}}
                    />
                  </TouchableOpacity>
                  :null
              }
            </View>
          </View>
        )
      }else{
        dataView.push(
          <View style={styles.itemView}  key={this.props.data.id}>
            <Text style={styles.textStyle}>{this.props.data.title}</Text>
            <TouchableHighlight
              underlayColor="#d4d4d4"
              activeOpacity={0.5}
              style={{marginTop:5}}
              onPress={()=>{
                this.props.onClick(this.props.data.id)
              }}>
              <Text style={styles.textInput}>
                {this.props.data.placeholder}
              </Text>
            </TouchableHighlight>
          </View>
        )
      }

    return (
      <View style={styles.container}>
        {dataView}
      </View>
    );
  }


  clearContent = ()=>{
    // alert('dafd')
    this.textInput.clear()
    this.setState({
      text:'',
      isShwoClear:false
    })
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:12,
    paddingRight:12,
    paddingTop:12,
  },
  //文本样式
  textStyle:{
    fontSize:18,
    color:'#C1C1C1'
  },
  //条目的View样式
  itemView:{
    marginBottom:5,
  },
  //可点击的带下划线的文本样式
  textInput:{
    borderBottomWidth:1,
    borderBottomColor:'#d4d4d4',
    height:35,
    textAlignVertical:'center',
    fontSize:16,
    paddingLeft:10
  }
});
