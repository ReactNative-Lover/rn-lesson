/**
 * @author TigerChain
 * github:https://github.com/githubchen001
 * @type {Object}
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
    ActivityIndicator,
} from 'react-native';

/**
 * 封装 loading 组件
 * @type {Object}
 */

// 编写组件方式一、正常方式
//  class Loading extends Component {
//
//   //默认属性 如果不传值得就会使用默认的
//   static defaultProps = {
//     text:'加载中...'
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={[this.props.style,{width:100,height:100,alignItems:'center',justifyContent:'center',borderRadius:15}]}>
//           <ActivityIndicator size="large" style={{backgroundColor:'#00000000'}}/>
//           <Text style={{textAlign:'center'}}>{this.props.text}</Text>
//         </View>
//       </View>
//     );
//   }
// }
//


// 编写组件方式二。 无状态组件 一般建议使用这种
const Loading = (props) =>{
  return(
    <View style={styles.container}>
      {renderLoading(props)}
    </View>
  )
};

/**
 * 渲染 loading 方法
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
function renderLoading(props) {
  return(
    <View style={[props.style,{width:100,height:100,alignItems:'center',justifyContent:'center',borderRadius:15}]}>
      <ActivityIndicator size="large" style={{backgroundColor:'#00000000'}}/>
      <Text style={{textAlign:'center'}}>{props.text}</Text>
    </View>
  )
}


module.exports = Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});
