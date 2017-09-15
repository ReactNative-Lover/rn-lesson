/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import Screen from '../Screen'

/**
 * 添加朋友中的条目组件，雷达加朋友，等
 * @author TigerChain
 * @type {Object}
 */
export default class AddFriendsItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemView}>
          <Image source={this.props.img} style={styles.imgStyle}/>
          <View style={styles.textView}>
            <Text style={styles.titleText}>{this.props.title}</Text>
            <Text>{this.props.subTitle}</Text>
          </View>
        </View>
        <View style={styles.dividerStyle}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:10,

  },
  itemView:{
    flexDirection:'row',
    alignItems:'center',
  },
  imgStyle:{
    width:40,
    height:40,
  },
  textView:{
    marginLeft:10
  },
  titleText:{
    fontSize:16,
    color:'black'
  },
  subTitleText:{
    marginTop:5,
    fontSize:10,
  },
  dividerStyle:{
    marginTop:10,
    height:Screen.onePixel,
    backgroundColor:'#e3e3e3'
  }
});
