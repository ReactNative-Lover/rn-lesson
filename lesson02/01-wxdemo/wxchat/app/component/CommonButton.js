/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  PixelRatio
} from 'react-native';
import Screen from '../common/Screen'

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
    isShowDivider:false,
    imgSize:25
  }

  render() {

    let DividerView = this.props.isShowDivider ?
    <View style={{height: Screen.onePixel,backgroundColor:'#e3e3e3',marginLeft:10,marginRight:10}}/>:null

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
        {props.leftImg?<Image source={props.leftImg} style={{width:props.imgSize,height:props.imgSize}}/>:null}
        <Text style={styles.leftTextStyle}>{props.leftText}</Text>
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
          {this.renderRightImg()}
        </View>
      )
    }else{

      return(
        <View style={styles.rightViewStyle}>
          {this.renderRightImg()}
        </View>
      )
    }
  }

  /**
   * 渲染右边的图片
   * @return {[type]} [description]
   */
  renderRightImg = ()=>{
    let rightImgView = this.props.rightImg ? //如果设置图片就显示，否则不显示
       <Image source={this.props.rightImg} style={{width:this.props.rightImgSize?this.props.rightImgSize:30,height:this.props.rightImgSize?this.props.rightImgSize:30,marginLeft:5}}/>
    : null

    return rightImgView
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
