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
  View
} from 'react-native';

import SplashScreen from "rn-splash-screen";

import Main from './app/Main'
export default class wxchat extends Component {

  componentDidMount(){
       this.timer =  setTimeout(()=>{
        SplashScreen.hide()
      },100) ;
     }

  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }

  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('wxchat', () => wxchat);
