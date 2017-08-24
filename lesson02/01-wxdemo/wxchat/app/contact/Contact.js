/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

/**
 * @auther TigerChain
 * @type {Object}
 * 通讯录界面
 */
export default class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>通讯录</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
