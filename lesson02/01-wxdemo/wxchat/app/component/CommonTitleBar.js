/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

/**
 * @author TigerChain
 * @type {Object}
 * 通用的 titlebar  定义成一个无状态的组件
 */

const CommonTitleBar = (props)=>{
  return (
    <View style={styles.container}>

      <View style={styles.titleBar}>

        {this._renderLeftView(props)}

        {this._renderRightView(props)}
      </View>

    </View>
  );
}

/**
 * 渲染左边 View 的方法
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
_renderLeftView = (props) =>{
  return(
    <View style={styles.headLeftStyle}>
      <TouchableOpacity
        onPress={()=>{
          props.nav.goBack();
        }}
        >
      <Image source={require('../../imgs/ic_back.png')} style={styles.btnBack}/>
      </TouchableOpacity>
       <View style={styles.dividerStyle} />
      <Text style={{color:'white',fontSize:18,marginLeft:10}}>{props.backTitle}</Text>
    </View>
  )
}

/**
 * 渲染右边的View 
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
_renderRightView = (props)=>{
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
module.exports = CommonTitleBar

// 上面无状态的组件和下面的的组件是等同的

// export default class CommonTitleBar extends Component {
//
//
//   render() {
//     return (
//       <View style={styles.container}>
//
//         <View style={styles.titleBar}>
//
//
//
//           <View style={styles.headLeftStyle}>
//             <TouchableOpacity
//               onPress={()=>{
//                 this.props.nav.goBack();
//               }}
//               >
//             <Image source={require('../../imgs/ic_back.png')} style={styles.btnBack}/>
//             </TouchableOpacity>
//              <View style={styles.dividerStyle} />
//             <Text style={{color:'white',fontSize:18,marginLeft:10}}>{this.props.backTitle}</Text>
//           </View>
//
//           <View style={{flexDirection:'row'}}>
//             <TouchableOpacity
//               onPress={()=>{alert('搜索')}}>
//               <View style={{width:45,height:45,justifyContent:'center'}} >
//                  <Image source={require('../../imgs/ic_search.png')} style={{width:25,height:25}}></Image>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={()=>{alert('+号')}}>
//               <View style={{width:45,height:45,justifyContent:'center',alignItems:'center'}}>
//                  <Image source={require('../../imgs/ic_add.png')}  style={{width:25,height:25}}></Image>
//               </View>
//           </TouchableOpacity>
//         </View>
//
//         </View>
//
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flexDirection:'column'
  },

  //标题栏样式
  titleBar:{
    backgroundColor:'#3E3A39',
    height:48,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

  },
  // 左边 View 的样式
  headLeftStyle:{
    flexDirection:'row',
    alignItems:'center'
  },
  // 返回按钮样式
  btnBack:{
    width:35,
    height:35,
    marginLeft:6,
    marginRight:6
  },
  //竖线的样式
  dividerStyle:{
    height: 30,
    width:1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#444444'
  }
});