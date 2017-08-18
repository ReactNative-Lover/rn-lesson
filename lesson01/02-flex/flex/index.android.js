/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class flex extends Component {

  constructor(props) {
      super(props);
      this.state={
        // 默认主轴的方向是横向的
        directionrow:true,
        rowBtnTitle:"cloumn",
        flexend:false,
        flexBtn:"flex-end",
        spaceAround:false
      };

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondViewStye}>

          <View style={[styles.commonViewStyle,this.state.spaceAround ? styles.spaceAroundStyle : null,this.state.directionrow ? styles.redViewStyle : styles.greenStyle,this.state.flexend ? styles.styleFlexEnd: styles.styleFlexStart]}>

            {/* 使用箭头函数可以不使用 bind  */}
            <Text style={styles.headTvStyle}>text1</Text>
            <Text style={styles.headTvStyle}>text2</Text>
            <Text style={styles.headTvStyle}>text2</Text>
            <Text style={styles.headTvStyle}>text2</Text>
          </View>

          {/* 主轴对齐方式按钮 */}
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <Button
              onPress={() =>{
                this._click()
              }}
            color="orange"
            title={this.state.rowBtnTitle}
          />
            {/* 主轴内容对齐方式按钮 */}
            <Button
              onPress={() =>{
                //取得主轴内容的对齐方式
                let justifyContentPro = !this.state.flexend
                // 主轴按钮上的字
                let justifyContentBtn = this.state.flexBtn == "flex-end" ? "flex-start" : "flex-end"
                this.setState({
                  flexend:justifyContentPro,
                  flexBtn:justifyContentBtn
                })
              }}
            color="orange"
            title={this.state.flexBtn} />

            <Button
              onPress={() => {
                let spaceAroundProp = !this.state.spaceAround
                this.setState({
                  spaceAround:spaceAroundProp
                })
              }}
              title="space-around"
              color="orange"
            />

          </View>

          <View style={styles.blueViewStyle}>
            <Text style={styles.tvStyle}> flexDirection:'row' 和 alignItems:'flex-start',
              flexWrap:'wrap' 实现标签</Text>
            <View style={styles.thirdViewStyle}>
              <Text style={styles.tTextViewStyle}>标签1</Text>
              <Text style={styles.tTextViewStyle}>标签2</Text>
              <Text style={styles.tTextViewStyle}>标签标签3</Text>
              <Text style={styles.tTextViewStyle}>标签4</Text>
              <Text style={styles.tTextViewStyle}>标签5</Text>
              <Text style={styles.tTextViewStyle}>标签6</Text>
              <Text style={styles.tTextViewStyle}>标签7</Text>
              <Text style={styles.tTextViewStyle}>标签8</Text>
              <Text style={styles.tTextViewStyle}>标签标签9</Text>
            </View>

          </View>
          <View>
            <Text></Text>
          </View>
        </View>
      </View>
    );
  }

  _click(){
    //取得主轴的方向
    let directionrow = !this.state.directionrow
    //取得 主轴的对齐按钮
    let btnName = this.state.rowBtnTitle == "cloumn"? "row": "cloumn"

    this.setState({
      directionrow:directionrow,
      rowBtnTitle:btnName
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffeecc',
  },
  secondViewStye:{
    backgroundColor:'yellow',
    flex:1,
    margin:20
  },
  commonViewStyle:{
    padding:15
  },
  headTvStyle:{
    margin:5
  },
  redViewStyle:{
    backgroundColor:'red',
    flexDirection:'row',
  },
  spaceAroundStyle:{
    justifyContent:'space-around'
  },
  styleFlexEnd:{
    justifyContent:'flex-end'
  },
  greenStyle:{
    backgroundColor:'green'
  },
  blueViewStyle:{
    backgroundColor:'blue'
  },
  tvStyle:{
    color:'red'
  },
  thirdViewStyle:{
    height:300,
    backgroundColor:'blue',
    margin:20,
    //主轴的方向是水平的
    flexDirection:'row',
    padding:5,
    //侧轴的对齐方式是左开始的
    alignItems:'flex-start',
    flexWrap:'wrap'
  },
  tTextViewStyle:{
    backgroundColor:'white',
    margin:5,
    padding:5,
    borderRadius:30,

  }
});

AppRegistry.registerComponent('flex', () => flex);
