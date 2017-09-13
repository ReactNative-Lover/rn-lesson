/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import Screen from '../common/Screen'

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

  //取得右边 View 左边的图片
  let rightLimg = props.rightLimg
  //取得右边 View 右边的图片
  let rightRimg = props.rightRimg
  let rightButton = props.rightButton
  let rightText = props.rightText
  // 声明一个 右边的 View
  let rightView = []


  if(rightLimg && rightRimg){//右边是两张图片
    rightView.push(
      <View key={1} style={{flexDirection:'row'}}>
        <TouchableOpacity
          onPress={()=>{props.onLeftButtonClick ? props.onLeftButtonClick():null}}>
          <View style={{width:45,height:45,justifyContent:'center'}} >
             <Image source={rightLimg} style={{width:25,height:25}}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{props.onRightButtonClick ? props.onRightButtonClick():null}}>
          <View style={{width:45,height:45,justifyContent:'center',alignItems:'center'}}>
             <Image source={rightRimg}  style={{width:25,height:25}}></Image>
          </View>
        </TouchableOpacity>
      </View>
    )

  }else if(rightButton){//右边是按钮
    rightView.push(
      <TouchableOpacity
        key={3}
        onPress={()=>{props.onLeftPerButtonClick?props.onLeftPerButtonClick():null}}
        >
          <Text style={styles.textButton}>
            {props.rightButton}
          </Text>
      </TouchableOpacity>
    )
  }else if(rightText){ // 左边是文字
    rightView.push(
      props.divider?
      <TouchableOpacity
        key={4}
        //如果传递了方法则调用，没有的话，就打印没有设置方法
        onPress={()=>{props.onRightTextClick ? props.onRightTextClick():console.log('dont setting rightButton fun');}}>
        <View style={{height:45,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
           <View style={styles.dividerStyle} />
           <Text style={[styles.rightText,{marginLeft:10,marginRight:10}]}>{rightText}</Text>
        </View>
    </TouchableOpacity>
    :<TouchableOpacity
          key={4}
          //如果传递了方法则调用，没有的话，就打印没有设置方法
          onPress={()=>{props.onRightTextClick ? props.onRightTextClick():console.log('dont setting rightButton fun');}}>
          <View style={{height:45,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
             <Text style={[styles.rightText,{marginRight:10}]}>{rightText}</Text>
          </View>
      </TouchableOpacity>
    )
  }
  else {
    rightView.push(//右边是图片
      <TouchableOpacity
        key={2}
        //如果传递了方法则调用，没有的话，就打印没有设置方法
        onPress={()=>{props.onRightButtonClick ? props.onRightButtonClick():console.log('dont setting rightButton fun');}}>
        <View style={{width:45,height:45,justifyContent:'center',alignItems:'center'}}>
           <Image source={rightRimg}  style={{width:25,height:25}}></Image>
        </View>
    </TouchableOpacity>
    )
  }

  return(
    <View style={{flexDirection:'row'}}>
      {/* <TouchableOpacity
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
    </TouchableOpacity> */}
    {rightView}
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
    width:Screen.onePixel,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#444444'
  },
  //右边带文字按钮样式
  textButton:{
    backgroundColor:'#2E8B57',
    textAlignVertical:'center',
    height:30,
    width:60,
    color:'white',
    borderRadius:2,
    textAlign:'center',
    marginRight:7
  },
  //右边文字的样式
  rightText:{
    color:'white',
    fontSize:13
  }
});
