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
import MorePopWindow from './MorePopWindow'

 export default class PopuWindShow extends Component {

  constructor(props){
    super(props);
    this.state = {
      showPop: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>


          {/* <TouchableOpacity
            onPress={()=>{alert('搜索')}}>
            <View style={{width:45,height:45,justifyContent:'center'}} >
               <Image source={require('../../imgs/ic_search.png')} style={{width:25,height:25}}></Image>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={()=>{
                this.setState({
                  showPop:!this.state.showPop
                })
            }}>

              <View style={{width:45,height:45,justifyContent:'center',alignItems:'center'}}>
                 <Image source={require('../../imgs/ic_add.png')}  style={{width:25,height:25}}></Image>
              </View>

              <View style={{ position: 'absolute', top: 0, left: 0, width: Screen.width, height: Screen.height }}>
                <MorePopWindow
                  nav={this.props.nav}
                  width={140}
                  height={200}
                  show={this.state.showPop}
                  closeModal={(show) => { this.setState({ showPop: show}) }}
                  menuIcons={[require('../../imgs/ic_pop_group_chat.png'), require('../../imgs/ic_pop_add_friends.png'), require('../../imgs/ic_pop_scan.png'),
                               require('../../imgs/ic_pop_pay.png'), require('../../imgs/ic_pop_help.png')]}
                  menuTexts={['发起群聊', '添加朋友', '扫一扫', '收付款', '帮助与反馈']}
                  />
              </View>

          </TouchableOpacity>



    </View>
    );
  }



}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
