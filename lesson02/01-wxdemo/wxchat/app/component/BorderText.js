/* @flow weak */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

/**
 * 带边框的文本
 * @author TigerChain
 * @type {Object}
 */
export default class BorderText extends PureComponent {
  render() {
    return (
      <TouchableOpacity>
        <Text style={styles.textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  textStyle:{
    height:25,
    borderRadius:12,
    borderColor:'#d4d4d4',
    borderWidth:1,
    textAlign:'center',
    margin:5,
    padding:3,
    paddingLeft:8,
    paddingRight:8
  }
});
