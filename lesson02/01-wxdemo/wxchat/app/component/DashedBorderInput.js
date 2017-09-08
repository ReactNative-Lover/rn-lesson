/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

/**
 * 定义虚线边框组件 添加标签中使用
 * @author TigerChain
 * @type {Object}
 */
export default class DashedBorderInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputWidth:80,
      height:0
    }
  }
  render() {
    return (
      <View style={[styles.container,{width:this.state.inputWidth}]}>
        <TextInput
          multiline={true}
          style={{height: Math.max(40, this.state.height),textAlign:'center'}}
          placeholder='添加标签'
          //自动增加高度
          onContentSizeChange={(event) => {
            this.setState({
              height: event.nativeEvent.contentSize.height,
            });
          }}
          underlineColorAndroid='transparent'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:25,
    backgroundColor:'transparent',
    borderRadius:12,
    borderWidth:1,
    borderColor:'#d4d4d4',
    borderStyle:'dashed',
    justifyContent:'center'
  },
});
