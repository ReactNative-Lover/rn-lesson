/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';


/**
 * @author TigerChain
 * 定义侧边栏组件
 * @type {Object}
 */
export default class SideBar extends Component {

  render() {

    let letters = ['☆', '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    //包含 abc 的组件
    let letterView = []
    // 遍历数组封装View
    letters.map((letter,index)=>{
      letterView.push(
      <TouchableOpacity
        key={index}
        onPress={()=>{
          // this._onLetterSelect(letter)
          this.props._onLetterSelect(letter)
        }}>
        <View>
          <Text style={{color: '#999999', fontSize: 13, paddingLeft: 2, paddingRight: 2}} key={"letter" + index}>{letter}</Text>
        </View>

      </TouchableOpacity>
      )
    })

    return (
      <View style={styles.container}>
        {letterView}
      </View>
    );
  }

 // /**
 //  * 选中字母事件
 //  * @param  {[type]} letter [description]
 //  * @return {[type]}        [description]
 //  */
 //  _onLetterSelect = (letter)=>{
 //
 //      // ToastAndroid.showWithGravity(letter, ToastAndroid.SHORT,ToastAndroid.CENTER);
 //  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000000'
  },
});
