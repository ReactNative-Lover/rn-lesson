/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class flex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondViewStye}>
          <Text>text1</Text>
          <Text>text2</Text>
          <View style={styles.thirdViewStyle}>
            <Text style={styles.tTextViewStyle}>标签1</Text>
            <Text style={styles.tTextViewStyle}>标签2</Text>
            <Text style={styles.tTextViewStyle}>标签3</Text>
            <Text style={styles.tTextViewStyle}>标签4</Text>
            <Text style={styles.tTextViewStyle}>标签5</Text>
            <Text style={styles.tTextViewStyle}>标签6</Text>
            <Text style={styles.tTextViewStyle}>标签7</Text>
            <Text style={styles.tTextViewStyle}>标签8</Text>
            <Text style={styles.tTextViewStyle}>标签9</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffeecc',
  },
  secondViewStye:{
    backgroundColor:'yellow',
    flex:1,
    margin:20
  },
  thirdViewStyle:{
    height:300,
    backgroundColor:'blue',
    margin:20,
    //主轴的方向是水平的
    flexDirection:'row',
    padding:5,
    //侧思的对齐方式是左开始的
    alignItems:'flex-start',
    flexWrap:'wrap'
  },
  tTextViewStyle:{
    backgroundColor:'white',
    margin:5,
    padding:5,
    borderRadius:30,

  }
});

AppRegistry.registerComponent('flex', () => flex);
