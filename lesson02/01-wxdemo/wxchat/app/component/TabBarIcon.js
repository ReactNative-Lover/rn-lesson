/* @flow weak */


import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

/**
 * @author TigerChain
 * @type {Object}
 * 自定义 tab 组件
 */
export default class TabBarIcon extends PureComponent {

  render() {
    let selectedImage = this.props.selectedImage?this.props.selectedImage:this.props.normalImage
    return (
      <Image
        source = {this.props.focused?selectedImage:this.props.normalImage}
        style={{ width: 25, height: 25 }}
      />
    );
  }
}
