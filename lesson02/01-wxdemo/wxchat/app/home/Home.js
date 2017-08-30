/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

/**
 * @author TigerChain
 * @type {Object}
 * 首页--微信
 */


import homeMessageData from '../jsondata/homeMessage.json'

import HomeMessageList from './HomeMessageList'

export default class Home extends Component {

  // 顶部 tabtitle 设置
 //  static navigationOptions = {
 //   headerTitle:(
 //     <Text style={{color:'white',fontSize:18,marginLeft:10}}>微信(11)</Text>
 //   ),
 //   headerStyle:{
 //     backgroundColor: '#3E3A39',
 //     height:45
 //   },
 //   headerRight:(
 //    //  左边搜索按钮和 + 按钮
 //     <View style={{flexDirection:'row'}}>
 //       <TouchableOpacity
 //         onPress={()=>{alert('搜索')}}>
 //         <View style={{width:45,height:45,justifyContent:'center'}} >
 //            <Image source={require('../../imgs/ic_search.png')} style={{width:25,height:25}}></Image>
 //         </View>
 //       </TouchableOpacity>
 //       <TouchableOpacity
 //         onPress={()=>{alert('+')}}>
 //         <View style={{width:45,height:45,justifyContent:'center',alignItems:'center'}}>
 //            <Image source={require('../../imgs/ic_add.png')}  style={{width:25,height:25}}></Image>
 //         </View>
 //     </TouchableOpacity>
 //     </View>
 //   )
 // }

  render() {
    return (
        <HomeMessageList
        datas = {homeMessageData}/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
