/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  BackHandler,
  Platform
} from 'react-native';

import CommonTitleBar from '../component/CommonTitleBar'
import Button from '../component/Button'
import CustomActionSheet from '../component/CustomActionSheet'
import Screen from '../common/Screen'


// 模拟详细资料中点击更多的数据
const actionSheetData = [
  {id:1,img:require('../../imgs/ic_common.png'),title:'设置备注及标签'},
  {id:2,img:require('../../imgs/ic_common.png'),title:'标为星标朋友'},
  {id:3,img:require('../../imgs/ic_common.png'),title:'设置朋友圈权限'},
  {id:4,img:require('../../imgs/ic_common.png'),title:'发送该名片'},
  {id:5,img:require('../../imgs/ic_common.png'),title:'投诉'},
  {id:6,img:require('../../imgs/ic_common.png'),title:'加入黑名单'},
  {id:7,img:require('../../imgs/ic_common.png'),title:'删除'},
  {id:8,img:require('../../imgs/ic_common.png'),title:'添加到桌面'}
]

/**
 * @author TigerChain
 * @type {Object}
 * 聊天详情界面
 */
export default class ContactDetail extends Component {

// 隐藏掉 TitleBar 当然也可以设置，一个个设置有点复，我们封装一个组件
static navigationOptions = {
  header:null
}
  render() {
    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle="详细资料"
          rightRimg={require('../../imgs/wechatMore.png')}
          onRightButtonClick={()=>{
            this.refs.alert.show(actionSheetData)
          }}
        />
        <View style={styles.itemViewStyle}>
          <Image source={require('../../imgs/ic_common.png')} style={{width:65,height:65}}></Image>
          <Text style={{alignSelf:'flex-start',marginLeft:22,fontSize:16,color:'black'}}>宝贝儿</Text>
        </View>

        <View style={styles.itemViewStyle}>
          <Text style={{alignSelf:'flex-start',fontSize:16,color:'black'}}>设置备注和标签</Text>
        </View>


        <View style={{flexDirection:'column',backgroundColor:'white',marginTop:15}}>
          <View style={styles.itemRootViewStyle2}>
            <Text style={{alignSelf:'flex-start',fontSize:16,color:'black',width:80}}>地区</Text>
            <Text style={{marginLeft:10}}>中国 陕西</Text>
          </View>
            <View style={styles.dividerStyle}></View>

        <View style={[styles.itemViewStyle,{marginTop:0}]}>
          <Text style={{fontSize:16,color:'black',width:80}}>个人相册</Text>
          <View style={{flexDirection:'row',marginLeft:10}}>
            <Image source={require('../../imgs/ic_common.png')} style={[styles.icon,{width:60,height:60}]}></Image>
            <Image source={require('../../imgs/ic_common.png')} style={[styles.icon,{width:60,height:60}]}></Image>
            <Image source={require('../../imgs/ic_common.png')} style={[styles.icon,{width:60,height:60}]}></Image>
          </View>

        </View>

        <View style={styles.dividerStyle}></View>

        <View style={[styles.itemViewStyle,{marginTop:0}]}>
          <Text style={{fontSize:16,color:'black',width:80}}>更多</Text>
        </View>
      </View>
      <View style={{marginTop:15,paddingLeft:15,paddingRight:15}}>

        <Button
          text="发消息"
          style={{color:'white'}}
          onClick={()=>{
            this.props.navigation.navigate('Chatting',{uname:'宝贝儿'})
          }}
          />
      </View>
      <View style={{marginTop:15,paddingLeft:15,paddingRight:15}}>

        <Button
          text="视频聊天"
          style={{color:'black',backgroundColor:'white',borderWidth:1,borderColor:'#e3e3e3'}}
          onClick={()=>{
            alert('asdfa')
          }}
          />
      </View>

      <CustomActionSheet
        ref="alert"
        onClick={
          this.onItemClick
        }
      />
      </View>
    );
  }
  onItemClick = (item)=>{
    const {navigate} = this.props.navigation
    switch (item.id) {
      //设置备注及标签
      case 1:
        navigate('SettingAndRemark',{titlename:'备注信息',uname:'宝贝儿'})
        break;
      case 2:

        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      default:

    }
    alert(item.id)
  }

  componentWillMount(){
    if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  componentWillUnmount() {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
     }
   }
   // 重写 Android 返回事件
   onBackAndroid = ()=>{
     //如果显示则调用隐藏
     if(this.refs.alert.isShow()){
        this.refs.alert.dismiss()
        //屏蔽原始的返回事件
        return true ;
     }else{
       //调用原始的返回事件
       return false
     }

   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e3e3e3'
  },
  // 条目 的样式
  itemViewStyle:{
    backgroundColor:'white',
    marginTop:15,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10
  },
  // 条目 样式2
  itemRootViewStyle2:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10
  },
  // 图片样式
  icon:{
    marginRight:10
  },
  // 分隔线样式
  dividerStyle:{
    height:Screen.onePixel,
    backgroundColor:'#e3e3e3',
    marginRight:15,
    marginLeft:15,
  }
});
