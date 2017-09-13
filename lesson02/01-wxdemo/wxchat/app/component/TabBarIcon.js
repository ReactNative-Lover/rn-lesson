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
      <View>
        <Image
          source = {this.props.focused?selectedImage:this.props.normalImage}
          style={{ width: 25, height: 25 }}
        />
        {
          this.props.badgenum?
          <View style={{ position: 'absolute', right: 1, top: 1, backgroundColor: 'red', borderRadius: 9, width:13, height: 13, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>{this.props.badgenum}</Text>
          </View>:null
        }
      </View>
     );
  }
}
