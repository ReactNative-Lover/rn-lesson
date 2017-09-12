/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

/**
 * 自定义带文本的图片组件
 * @author TigerChain
 * @type {Object}
 */
export default class ImageAndText extends Component {

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onClick?this.props.onClick:console.log('no setting onclick function')}
        activeOpacity={0.5}>
        <View style={styles.container}>
          <Image source={this.props.img} style={{width:this.props.imgSize?this.props.imgSize:45,height:this.props.imgSize?this.props.imgSize:45}}/>
          <Text style={[styles.titleText,{color:this.props.textColor,fontSize:this.props.textfontSize}]}>{this.props.title}</Text>
          {this.props.subTitle?<Text style={[styles.subTitleText]}>{this.props.subTitle}</Text>:null}

        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  titleText:{
    marginTop:7
  },
  subTitleText:{
    marginTop:4,
    color:'#d4d4d4'
  }
});
