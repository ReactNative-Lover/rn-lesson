/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Image
} from 'react-native';

import BaseNoTitleBarComponent from '../common/BaseNoTitleBarComponent'
import CommonTitleBar from '../component/CommonTitleBar'

/**
 * 模拟数据
 * @type {Array}
 */
let datas = [
   { key: "1", title:'会员卡',data:[{id:1,img:require('../../imgs/ad4.png'),cname:'会员卡',isShowCount:true,count:0}] },
   { key: "2", title:'优惠卷',data:[{id:2,img:require('../../imgs/adc.png'),cname:'朋友的优惠券',isShowCount:false,count:0},{id:3,img:require('../../imgs/adf.png'),cname:'我的票卷',isShowCount:true,count:0}]}
]

/**
 * 卡包界面
 * @author TigerChain
 * @type {Object}
 */
export default class CardHolder extends BaseNoTitleBarComponent {
  render() {
    const {params} = this.props.navigation.state
    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          divider={true}
          backTitle={params.titleName}
          rightText={'消息通知'}
          onRightTextClick={this._onRightTextClick}
        />
        <SectionList
          style={{
          paddingLeft:10,
          paddingTop:5,
          paddingRight:10}}
          sections={datas}
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          keyExtractor = {this._createUniqueKey}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={this._separatorComponent}
        />
      </View>
    );
  }

  _onRightTextClick = ()=>{
    alert('消息通知')
  }

  _createUniqueKey = (item ,index)=>{
    return "index"+index+item;
  }

  /**
   * 渲染条目
   * @param  {[type]} info [description]
   * @return {[type]}      [description]
   */
  _renderItem = (info)=>{
    return(
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=>{this._onItemClick(info)}}>
        <View style={styles.itemView}>
            <Image source={info.item.img} style={styles.itemImg}/>
            <Text style={styles.itemText}>{info.item.cname}</Text>
            {/* 显示后面的数字 */}
            {info.item.isShowCount?<Text style={{fontSize:16,color:'black'}}>{"("+info.item.count+")"}</Text>:null}
        </View>
      </TouchableOpacity>
    )
  }

  /**
   * 渲染组头
   * @param  {[type]} info [description]
   * @return {[type]}      [description]
   */
  _sectionComp = (info) => {
  var txt = info.section.title;
  return <Text style={styles.sectionView}>{txt}</Text>
  }

  //分隔线
  _separatorComponent = ()=>(
    <View style={{height:10,backgroundColor:'transparent'}}></View>
  )

  _onItemClick = (info) =>{
    switch (info.item.id) {
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;
      default:

    }

    alert(info.item.cname)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#d4d4d4',
  },
  //条目的样式
  itemView:{
    backgroundColor:'white',
    flexDirection:'row',
    borderRadius:4,
    alignItems:'center',
    padding:20
  },
  sectionView:{
    height:40,
    textAlignVertical:'center'
  },
  //条目 文本样式
  itemText:{
    fontSize:16,
    marginLeft:15,
    color:'black'
  },
  //条目图片样式
  itemImg:{
    width:50,
    height:35
  }
});
