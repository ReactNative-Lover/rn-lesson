/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

/**
 * @author TigerChain
 * 自定义有状态--选中和未选中状态的图片文字组件
 * @type {Object}
 */
export default class ImageTextState extends Component {

  constructor(props){
    super(props)
    this.state = {
      active: this.props.focused
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <TouchableHighlight
            underlayColor='rgba(255,255,255,0)'
            onPress={()=>{
              this.setState(preState => { //建议不要直接修改状态
                return { active: !preState.active };
              });
            }}
            >
              {this.state.active?<Image source={this.props.pressedImg} style={{width:40,height:35}}/>:<Image source={this.props.normalImg} style={{width:40,height:35}}/>}
          </TouchableHighlight>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
  },
  text:{
    marginTop:10,
    fontSize:14,
    color:'white'
  }

});
