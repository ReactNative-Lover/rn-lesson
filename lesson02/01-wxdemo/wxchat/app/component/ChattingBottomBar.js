/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,

} from 'react-native';


/**
 * 聊天底部的状态栏
 * @type {Object}
 */
export default class ChattingBottomBar extends Component {
  render() {
    return (


      <View style={styles.container}>
        <TouchableOpacity  activeOpacity={0.5} onPress={()=>{
          alert('asdf')
        }}>
          <Image style={styles.icons} source={require('../../imgs/ic_chat_sound.png')}></Image>
        </TouchableOpacity>

          <TextInput style={{flex:1}}/>
        <TouchableOpacity activeOpacity={0.5}>
            <Image style={styles.icons} source={require('../../imgs/ic_chat_emoji.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} onPress={()=>{
          this.handPress('add')
        }}>
          <Image style={styles.icons} source={require('../../imgs/ic_chat_add.png')}></Image>
        </TouchableOpacity>
      </View>
    );
  }

  handPress = (flag)=>{
    if(flag=='add'){
      this.props.changeView(false, true);
    }
  }

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    paddingLeft:10,
    paddingRight:10,
    flexDirection:'row',
    height:50,
    alignItems:'center',
  },
  icons:{
    width:40,
    height:40,
  }
});
