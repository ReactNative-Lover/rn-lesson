/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

/**
 * @author TigerChain
 * 自定义有状态--选中和未选中状态的图片文字组件
 * @type {Object}
 */
export default class ImageTextState extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.img} style={{width:40,height:35}}></Image>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
  },
  text:{
    marginTop:10,
    fontSize:14,
    color:'white'
  }

});
