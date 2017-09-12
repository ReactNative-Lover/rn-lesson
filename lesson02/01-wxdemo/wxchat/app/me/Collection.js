/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import BaseNoTitleBarComponent from '../common/BaseNoTitleBarComponent'
import CommonTitleBar from '../component/CommonTitleBar'

//模拟数据，可以自行使用 rap /easy-mock 或是一些 mock api来模拟这些数据
let datas = [
  {id:1,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:2,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:3,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:4,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:5,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:6,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:7,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:8,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:9,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:10,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:11,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:12,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:13,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'},
  {id:14,avator:require('../../imgs/ic_common.png'),uname:'TigerChain',sendTime:'6天前',contentImg:require('../../imgs/ic_logo.png'),title:'最近很火的全景图是如何实现的?',author:'TigerChain'}
]

/**
 * 收藏
 * @author TigerChain
 * @type {Object}
 */
export default class Collection extends BaseNoTitleBarComponent {

  _keyExtractor = (item, index) => item.id;
  render() {
    const {params} = this.props.navigation.state

    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle={params.titleName}
          rightLimg={require('../../imgs/ic_search.png')}
          rightRimg={require('../../imgs/ic_add.png')}
          onLeftButtonClick={this._onLeftButtonClick}
          onRightButtonClick={this._onRightButtonClick}
        />

        <FlatList
          data={datas}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={this._separatorComponent}
        />
      </View>
    );
  }


  _renderItem = ({item,index}) =>{
    return(
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=>{
          alert(item.id)
        }}>
        <View style={styles.itemView}>
          <View style={styles.itemTopView}>
            <Image source={item.avator} style={styles.avator}/>
            <Text style={styles.uname}>{item.uname}</Text>
            <Text style={styles.sendTime}>{item.sendTime}</Text>
          </View>
          <View style={styles.itemBottomView}>
            <Image source={item.contentImg} style={styles.conteImg}></Image>
            <View style={styles.itemBottomRightView}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

_separatorComponent = ()=>{
  return(
    <View style={styles.dividerStyle}/>
  )
}
  /**
   * 搜索按钮事件
   * @return {[type]} [description]
   */
  _onLeftButtonClick = ()=>{
      alert('搜索')
  }
  /**
   * + 按钮事件
   * @return {[type]} [description]
   */
  _onRightButtonClick =()=>{
    alert('+')
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView:{
    paddingLeft:15,
    paddingRight:15,
    paddingTop:15,
    paddingBottom:25,
  },
  //条目顶部的布局
  itemTopView:{
    flexDirection:'row',
    alignItems:'center'
  },
  //头像
  avator:{
    height:30,
    width:30,
    borderRadius:20
  },
  //姓名
  uname:{
    marginLeft:10,
    fontSize:16
  },
  //发送时间样式
  sendTime:{
    flex:1,
    textAlign:'right',
    textAlignVertical:'center',
  },
  // 底部 View 样式
  itemBottomView:{
    flexDirection:'row',
    marginTop:10
  },
  conteImg:{
    width:50,
    height:50
  },
  itemBottomRightView:{
    marginLeft:6
  },
  title:{
    fontSize:16,
    color:'black'
  },
  author:{
    fontSize:12,
  },
  dividerStyle:{
    height:7,
    backgroundColor:'#d4d4d4'
  }
});
