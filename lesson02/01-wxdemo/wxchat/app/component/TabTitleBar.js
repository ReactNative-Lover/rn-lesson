/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default class TabTitleBar extends Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.titleBar}>

          {this._renderLeftView()}

          {this._renderRightView()}
        </View>

      </View>

    );
  }



  /**
   * 渲染左边 View 的方法
   * @param  {[type]} props [description]
   * @return {[type]}       [description]
   */
  _renderLeftView = () =>{
    return(
      <View>
        <Text style={{color:'white',fontSize:18,marginLeft:10}}>微信(11)</Text>
      </View>
    )
  }

  /**
   * 渲染右边的View
   * @param  {[type]} props [description]
   * @return {[type]}       [description]
   */
  _renderRightView = ()=>{

    return(
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          onPress={()=>{alert('搜索')}}>
          <View style={{width:45,height:45,justifyContent:'center'}} >
             <Image source={require('../../imgs/ic_search.png')} style={{width:25,height:25}}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{alert('+号')}}>
          <View style={{width:45,height:45,justifyContent:'center',alignItems:'center'}}>
             <Image source={require('../../imgs/ic_add.png')}  style={{width:25,height:25}}></Image>
          </View>
      </TouchableOpacity>
    </View>

    )
  }

}

const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
  },
  titleBar: {
    backgroundColor:'#3E3A39',
    height:48,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
});
