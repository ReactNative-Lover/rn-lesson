/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import CommonTitleBar from '../component/CommonTitleBar'
import Screen from '../common/Screen'
import ImageTextState from '../component/ImageTextState'


//以下是导入三方库
//摇晃事件库
import RNShakeEvent from 'react-native-shake-event';
//动画库
import * as Animatable from 'react-native-animatable';

/**摇一摇界面
 * @author TigerChain
 * @type {Object}
 */
export default class ShakeAndShake extends Component {

  state = {
    animationrun:false,
  }

  // 隐藏掉 TitleBar 当然也可以设置，一个个设置有点复，我们封装一个组件
  static navigationOptions = {
    header:null
  }

  componentWillMount(){
    RNShakeEvent.addEventListener('shake', () => {
    // this.refs.view.transition(1,100);
    this.setState({
      animationrun:true
    })
   });
  }

  componentWillUnmount() {
    RNShakeEvent.removeEventListener('shake');
  }

  render() {

    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle={params.name}
          rightRimg={require('../../imgs/ic_add.png')}
          onRightButtonClick={()=>{
            alert('拍照')
          }}
        />

        <View style={styles.shakeView}>
            {this.renderTopView()}
          {this.renderBottomView()}
        </View>

        <View style={{flexDirection:'row',marginBottom:15}}>
          <ImageTextState normalImg={require('../../imgs/ic_more_card.png')} pressedImg={require('../../imgs/ic_more_card.png')} focused = {true} text="人"/>
          <ImageTextState normalImg={require('../../imgs/a6m.png')} pressedImg={require('../../imgs/a6n.png')} focused = {false} text="歌曲"/>
          <ImageTextState normalImg={require('../../imgs/a6q.png')} pressedImg ={require('../../imgs/a6r.png')} focused = {false} text="电视"/>
        </View>
      </View>
    );
  }

  renderTopView(){
    // 常规的是拿到 ref 然后设置动画，这里简单处理一下
    if(this.state.animationrun){
      return(
        <Animatable.View  animation="slideInDown" direction="alternate" ref="view" onAnimationEnd={()=>{this.setState({animationrun:false})}} style={{alignItems:'center'}}>
          <Image source={require('../../imgs/shake_top.png')}  style={{height:100,width:180}}></Image>
          <View style={styles.dividerStyle}></View>
        </Animatable.View>
      )
    }else{
      return(
        <Animatable.View  style={{alignItems:'center'}}>
          <Image source={require('../../imgs/shake_top.png')}  style={{height:100,width:180}}></Image>
          {/* <View style={styles.dividerStyle}></View> */}
        </Animatable.View>
      )
    }
  }

  renderBottomView(){
    if(this.state.animationrun){
      return(
        <Animatable.View  animation="slideInUp" direction="alternate" onAnimationEnd={()=>{this.setState({animationrun:false})}} style={{alignItems:'center'}}>
          <View style={styles.dividerStyle}></View>
         <Image source={require('../../imgs/shake_bottom.png')}  style={{height:100,width:180}}></Image>
        </Animatable.View>
      )
    }else{
      return(
        <Animatable.View   style={{alignItems:'center'}}>
          {/* <View style={styles.dividerStyle}></View> */}
         <Image source={require('../../imgs/shake_bottom.png')}  style={{height:100,width:180}}></Image>
        </Animatable.View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#46494F'
  },
  shakeView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  dividerStyle:{
    backgroundColor:'#333333',
    width:Screen.width,
    height:5
  }
});
