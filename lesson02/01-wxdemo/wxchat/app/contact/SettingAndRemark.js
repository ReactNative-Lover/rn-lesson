/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

//导入没有 TitleBar 的父组件
import BaseNoTitleBarComponent from '../common/BaseNoTitleBarComponent'
import CommonTitleBar from '../component/CommonTitleBar'
import TextAndInput from '../component/TextAndInput'

/**
 * 设置备注及标签
 * @author TigerChain
 * @type {Object}
 */
export default class SettingAndRemark extends BaseNoTitleBarComponent {
  render() {
    const {params} = this.props.navigation.state
    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle={params.titlename}
        />
        <TextAndInput
          remarkName={params.uname}
          nav={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
