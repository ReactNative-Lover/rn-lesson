/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';


import BaseNoTitleBarComponent from '../../common/BaseNoTitleBarComponent'
import CommonTitleBar from '../../component/CommonTitleBar'
import AddFriendsItem from './AddFriendsItem'
/**
 * 首页四大 tab 顶部的+号弹出中的 添加朋友界面
 * 添加朋友
 * @author TigerChain
 * @type {Object}
 */

//模拟数据
let datas = [
  {id:1,img:require('../../../imgs/a_.png'),title:'雷达加朋友',subTitle:'添加自边的朋友'},
  {id:2,img:require('../../../imgs/a_9.png'),title:'面对面建群',subTitle:'与身边的朋友进入同一个群聊'},
  {id:3,img:require('../../../imgs/a_8.png'),title:'扫一扫',subTitle:'扫描二维码名片'},
  {id:4,img:require('../../../imgs/a_1.png'),title:'手机联系人',subTitle:'添加或邀请通讯录中的朋友'},
  {id:5,img:require('../../../imgs/a_7.png'),title:'公众号',subTitle:'获取更多资讯和服务'}
]
export default class AddFriends extends BaseNoTitleBarComponent {
  render() {
    const {params} = this.props.navigation.state
    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle={params.titleName}
        />
        <View style={styles.searchView}>
          <View  style={styles.searchViewContent}>
              <Image source={require('../../../imgs/aaz.png')} style={styles.img}/>
              <Text style={styles.textView}>微信号/QQ号/手机号</Text>
          </View>
        </View>
        <View style={styles.aboutMeView}>
          <Text>我的手机号: 182********</Text>
          <Image source={require('../../../imgs/a_5.png')} style={{width:25,height:25,marginLeft:8}}/>
        </View>

        <View style={{marginTop:20,backgroundColor:'white'}}>
          {this.renderItemView()}
        </View>

      </View>
    );
  }

/**
 * 渲染每个条目
 * @return {[type]} [description]
 */
  renderItemView = () =>{
    let itemView = []
    datas.map((data,index)=>{
      itemView.push(
        // 这里注意一点 TouchableHighlight 针对rn 的原生组件可以使用，如果在组合组件上使用，会报 Touchable child must either be native or forward setNativeProps to a native component stack 错误
        // 一般情况拿一个 View 包装一下即可
        <TouchableHighlight
          underlayColor="#d4d4d4"
          key={index}
          onPress={()=>this._onImteClick(data)}>
          <View style={{paddingLeft:10,paddingRight:10}}>
            <AddFriendsItem
            img={data.img}
            title={data.title}
            subTitle={data.subTitle}
            />
          </View>
        </TouchableHighlight>
      )
    })
    return itemView
  }

  /**
  * 条目点击事件
  * @param  {[type]} data [description]
  * @return {[type]}      [description]
  */
  _onImteClick = (data)=>{
    const {navigate} = this.props.navigation
    switch (data.id) {
      //雷达加朋友
      case 1:

      break;

      //面对面建群
      case 2:

      break;
      //扫一扫
      case 3:
        navigate('Qrcode')
      break ;

      //手机联系人
      case 4:

      break ;

      //公众号
      case 5:

      break ;
      default:

    }
    alert(data.id)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchView:{
    backgroundColor:'white',
    padding:10,
    marginTop:20

  },
  searchViewContent:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#3FB838'
  },
  img:{
    width:35,
    height:35,
  },
  textView:{
    marginLeft:15
  },
  aboutMeView:{
    marginTop:8,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'

  }
});
