/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button
} from 'react-native';

export default class CusindIcator extends Component {


constructor(props){
  super(props) ;
  this.state = {
    animating:true,
    btnText:"隐藏"
  }
}


  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.state.btnText}
          onPress={()=>{
            this._showOrHide()
          }}
        />
        <Text>原始 ActivityIndicator</Text>
        <ActivityIndicator
          animating={this.state.animating}
          ></ActivityIndicator>
          <Text>small ActivityIndicator</Text>
        <ActivityIndicator
            animating={this.state.animating}
             size="small"
          ></ActivityIndicator>

          <Text>large ActivityIndicator</Text>
          <ActivityIndicator
              animating={this.state.animating}
               size="large"
            ></ActivityIndicator>

              <Text>芾样式的 ActivityIndicator</Text>
          <ActivityIndicator
             animating={this.state.animating}
             size="large"
                style={[styles.centering, {height: 80}]}
          ></ActivityIndicator>

      </View>
    );
  }
  _showOrHide(){
    if(this.state.animating){
      this.setState({
        animating:false,
        btnText:"显示"
      })
    }else{
      this.setState({
        animating:true,
        btnText:"隐藏"
      })
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  centering: {
   alignItems: 'center',
   justifyContent: 'center',
   padding: 8,
 }
});
