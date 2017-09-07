/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

/**
 * 定义一个没有 TitleBar 的父组件，使用 Navigator 的时候默认是有 TitleBar 的
 * @author TigerChain
 * @type {Object}
 */
export default class BaseNoTitleBarComponent extends Component {
  static navigationOptions = {
    header:null
  }
}
