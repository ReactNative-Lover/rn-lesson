/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';

/**
 * @author TigerChain
 * 自定义通用的 button 组件，发现和我里面使用的比较多
 */
export default class CommonButton extends Component {


  /**
   * 设置默认属性
   * @type {Object}
   */
  static defaultProps = {
    leftText:'',
    rightText:'',
    leftImg:'',
    rightImg:'',
    isShowDivider:false
  }

  render() {

    let DividerView = this.props.isShowDivider ?
    <View style={{height:1,backgroundColor:'#e3e3e3',marginLeft:10,marginRight:10}}/>:null

    return (
      <View style={{marginTop:this.props.marginTop}}>
        <TouchableHighlight
          activeOpacity={0.5}
          onPress={()=>{this.props.onClick()}}>

          <View style={{backgroundColor:'white'}}>
            <View style={[styles.container,this.props.style]}>
              {this._renderLeftView(this.props)}
              {this._renderRightView()}
            </View>
              {DividerView}
          </View>

        </TouchableHighlight>

      </View>
    );
  }


/**
 * 函数式的写法
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
  _renderLeftView = (props) =>{
    return(
      <View style={[styles.leftViewStyle]}>
        <Image source={this.props.leftImg} style={{width:25,height:25}}></Image>
        <Text style={styles.leftTextStyle}>{this.props.leftText}</Text>
      </View>
    )
  }

/**
 * 非函数式的写法，这样写是为了让大家对两种写法有个认识
 */
  _renderRightView(){
    const {rightText} = this.props;
    //根据右边文字是否为空决定显示的布局
    if(rightText.length!=0 ){
      return(
        <View style={styles.rightViewStyle}>
          <Text >{this.props.rightText}</Text>
          <Image source={this.props.rightImg} style={{width:30,height:30,marginLeft:5}}></Image>
        </View>
      )
    }else{
      let rightImgView = this.props.rightImg.length!=0 ?
         <Image source={this.props.rightImg} style={{width:30,height:30,marginLeft:5}}/>
      :
       null
      return(
        <View style={styles.rightViewStyle}>
          {rightImgView}
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor:'white',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10,
    alignItems:'center',
    justifyContent:'space-between'
  },
  //左边 View 的样式
  leftViewStyle:{
    flexDirection:'row',
  },
  // 左边 文本的样式
  leftTextStyle:{
    textAlignVertical:'center',
    marginLeft:10
  },

  rightViewStyle:{
    flexDirection:'row',
    alignItems:'center'

  }
});
