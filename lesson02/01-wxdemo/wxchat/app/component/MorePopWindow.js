/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

/**
 * 首页 + 号的弹出框
 * @type {Object}
 */
export default class MorePopWindow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MorePopWindow component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:100,
    height:100
  },
});
