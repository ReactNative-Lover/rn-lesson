/* @flow weak */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Animated,
  Easing,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import Screen from '../common/Screen'

const [aWidth, aHeight] = [Screen.width, 320];
const [left, top] = [0, 0];

/**
 * 自定义 actionSheet 组件
 * @type {Object}
 */
export default class CustomActionSheet extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      offset: new Animated.Value(0),
      opacity: new Animated.Value(0),
      data:[],
      hide: true,
    }
  }

  render() {
    if(this.state.hide){
      return null
    }else{
      return (
          <View style={styles.container}>
            <Animated.View style={ styles.mask }>
            </Animated.View>
            <Animated.View style={[styles.tip , {transform: [{
               translateY: this.state.offset.interpolate({
                inputRange: [0, 1],
                outputRange: [Screen.height, (Screen.height-aHeight)]
               }),
             }]
           }]}>

           <ScrollView
             style={{width:Screen.width}}
             showsVerticalScrollIndicator ={false}>
             <View>
               {this.renderItem()}
             </View>
           </ScrollView>
          </Animated.View>
        </View>
      );
    }
  }

/**
 * 渲染每个条目
 * @return {[type]} [description]
 */
renderItem(){
  let itemView = []
  this.state.data.map((item,index) =>{
    itemView.push(
      <TouchableHighlight
        underlayColor='#e3e3e3'
        onPress={()=>{
        this.onItemClick(item)
      }}
      key={index}
      >
        <View style={styles.itemView}>
          <Image source={item.img} style={{width:30,height:30}}></Image>
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  })

  return itemView
}
  //显示动画
in() {
  Animated.parallel([
    Animated.timing(
      this.state.opacity,
      {
        easing: Easing.linear,
        duration: 200,
        toValue: 0.8,
      }
    ),
    Animated.timing(
      this.state.offset,
      {
        easing: Easing.linear,
        duration: 200,
        toValue: 1,
      }
    )
  ]).start();
}

//隐藏动画
out = ()=>{
  Animated.parallel([
    Animated.timing(
      this.state.opacity,
      {
        easing: Easing.linear,
        duration: 200,
        toValue: 0,
      }
    ),
    Animated.timing(
      this.state.offset,
      {
        easing: Easing.linear,
        duration: 200,
        toValue: 0,
      }
    )
  ]).start();

  setTimeout(
    () => this.setState({hide: true}),
    100
  );
}

//取消
dismiss(event) {
  if(!this.state.hide){
    this.out();
  }
}

//点击
onItemClick = (item)=> {
  if(!this.state.hide){
    this.out();
    this.props.onClick(item)
  }
}

/**
 * 显示 dialog
 * @param  {[type]} datas [description]
 * @return {[type]}       [description]
 */
show = (datas)=> {
  // this.parent = obj;
  if(this.state.hide){
    this.setState({data:datas, hide: false}, this.in);
  }
}
}

const styles = StyleSheet.create({
  container: {
   position:"absolute",
   width:Screen.width,
   height:Screen.height,

  },
  mask:{
   justifyContent:"center",
   backgroundColor:"#383838",
   opacity:0.8,
   position:"absolute",
   width:Screen.width,
   height:Screen.height,
 },
 tip:{
   width:aWidth,
   height:aHeight,
   backgroundColor:"#fff",
   alignItems:"center",
   paddingBottom:20
 },
 itemView:{
   flexDirection:'row',
   paddingTop:10,
   paddingBottom:10,
   paddingLeft:15,
   paddingRight:15,
   alignItems:'center'
 },
 itemText:{
   fontSize:18,
   marginLeft:18
 }
});
