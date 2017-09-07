/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';

import Screen from '../common/Screen'

/**
 * @author TigerChain
 * 定义文本和输入框组件
 * @type {Object}
 */
const datas = [
  {id:1,title:'备注名',placeholder:'',isInput:true},
  {id:2,title:'标签',placeholder:'添加标签对联系人进行分类',isInput:false},
  {id:3,title:'电话号码',placeholder:'添加电话号码',isInput:true},
  {id:4,title:'描述',placeholder:'添加更多备注信息',isInput:true},
  {id:5,title:'附加图片',placeholder:'添加名片或相关图片',isInput:false},
]
export default class TextAndInput extends Component {


  constructor(props){
    super(props);
    this.state = {
      isShwoClear:false,
      text:'123'
    }
  }

  render() {
    //定义一个数据View
    let dataView = []

    datas.map((item,index)=>{
      if(item.isInput){
        dataView.push(
          <View style={styles.itemView} key={index}>
            <Text style={styles.textStyle}>{item.title}</Text>
            <View style={{height:50, borderBottomWidth:1,borderBottomColor:'#d4d4d4',flexDirection:'row',alignItems:'center'}}>
              <TextInput
                style={{paddingLeft:10,fontSize:16,width:Screen.width*0.82,height:50,textAlignVertical:'center',marginBottom:-10}}
                placeholder={item.placeholder}
                selectionColor="#2E8B57"
                autoFocus={true}
                // onFocus={()=>{
                //   if(this.state.text.length>0){
                //     this.setState({
                //       isShwoClear:true
                //     })
                //   }
                // }}
                onChangeText={(txt)=>{
                  if(txt.length>0){
                    this.setState({
                      text:txt,
                      isShwoClear:true
                    })
                  }else{
                    this.setState({
                      text:txt,
                      isShwoClear:false
                    })
                  }
                }}
                value={item.id==1?this.props.remarkName:null}
                underlineColorAndroid="transparent"/>

                {this.state.isShwoClear?<Image source={require('../../imgs/clear.png')} style={{height:12,height:12,marginBottom:-10}}/>:null}

            </View>

          </View>
        )
      }else{
        dataView.push(
          <View style={styles.itemView}  key={index}>
            <Text style={styles.textStyle}>{item.title}</Text>
            <TouchableHighlight
              underlayColor="#d4d4d4"
              activeOpacity={0.5}
              style={{marginTop:5}}
              onPress={()=>{
                this.onclick(item.id)
              }}>
              <Text style={styles.textInput}>
                {item.placeholder}
              </Text>
            </TouchableHighlight>

          </View>
        )
      }
    })

    return (
      <View style={styles.container}>
        {dataView}
      </View>
    );
  }

  onclick = (id) =>{
    switch (id) {
      //添加标签对联系人进行分类
      case 2:

        break;
      // 添加名片或相关图片
      case 5:

        break ;

      default:

    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:12,
    paddingRight:12,
    paddingTop:12,
    flex: 1,
    backgroundColor:'white'
  },
  //文本样式
  textStyle:{
    fontSize:18,
    color:'#C1C1C1'
  },
  //条目的View样式
  itemView:{
    marginBottom:15
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
