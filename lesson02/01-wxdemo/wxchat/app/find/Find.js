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
 * 发现界面
 */
export default class Find extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>发现</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
