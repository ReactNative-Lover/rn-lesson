/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import Screen from '../common/Screen'

// 定义列数为 4
let cols = 4;
let boxW = 55;
// 平分的间距算法
let vMargin  = (Screen.width - cols*boxW)/(cols + 1);
let hMargin = 25;

/**
 * 聊天界面的 + 号按钮对应的界面
 * @author
 * @type {Object}
 */

let datas = [
  {img:require('../../imgs/ic_more_gallery.png'),title:'相册'},
  {img:require('../../imgs/ic_more_photo.png'),title:'拍摄'},
  {img:require('../../imgs/ic_more_movie.png'),title:'视频聊天'},
  {img:require('../../imgs/ic_more_position.png'),title:'位置'},
  {img:require('../../imgs/icon_more_hb.png'),title:'红包'},
  {img:require('../../imgs/ic_more_phone.png'),title:'转账'},
  {img:require('../../imgs/ic_more_card.png'),title:'名片'},
  {img:require('../../imgs/ic_more_recorder.png'),title:'话音输入'}
]

export default class ChatMoreView extends Component {

  render() {

    // 存放所有的图文 View
    let ItemView = []

    datas.map((data,index)=>(
      //把 每个图文组件放到集合 View 中
      ItemView.push(
        <ImgWidText
          key={index}
          img={data.img}
          text={data.title}
        />
      )
    ))

    return (
      <View style={styles.container}>
          {ItemView}
      </View>
    );
  }
}

class ImgWidText extends Component {
  render(){
    return(
      <View style={styles.imgWidTextViewStyle}>
        <View style={styles.imgContanier}>
          <Image source={this.props.img} style={{width:38,height:38}}/>
        </View>

        <Text style={styles.textView}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'#F4F4F4',
    flexWrap:'wrap', //超出换行
    alignItems:'center',
  },
  // 包含图片文字的 View 样式
  imgWidTextViewStyle:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:hMargin,
    marginLeft:vMargin,
  },
  // 包含图片 View 的样式
  imgContanier:{
    justifyContent:'center',
    alignItems:'center',
    width:boxW,
    height:boxW,
    borderColor:'#DFDFDF',
    borderRadius:10,
    borderWidth:Screen.onePixel,
  },
  // 文字样式
  textView:{
    fontSize:12,
    marginTop:5
  }

});
