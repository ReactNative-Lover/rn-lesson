/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
//导入三方图片选择组件

import CommonTitleBar from '../component/CommonTitleBar'
import ChattingBottomBar from '../component/ChattingBottomBar'
import ChatMoreView from '../component/ChatMoreView'




/**
 * @author TigerChain
 * 聊天界面
 * @type {Object}
 */
export default class Chatting extends Component {

  // 隐藏掉 TitleBar 当然也可以设置，一个个设置有点复，我们封装一个组件
  static navigationOptions = {
    header:null
  }

  constructor(props){
    super(props);
    this.state = {
      showMoreView:false,
      showEmojView:false,
    }
  }

  render() {
    // 取得导航组件传过来的参数
    const { params } = this.props.navigation.state;


    let moreView = this.state.showMoreView ?  <ChatMoreView onItemClick={this._onItemClick}/>:null

    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle={params.uname}
          rightRimg={require('../../imgs/ic_add.png')}
          onRightButtonClick={()=>{
            alert('查看个人详情')
          }}
        />
        <View style={{flex:1}}>
          <Text>

          </Text>
        </View>
        <View style={{height:50}}>
          <ChattingBottomBar changeView={this.changeView}/>
        </View>

        {moreView}

      </View>
    );
  }

  changeView = (emoji, more)=>{
    this.setState({
      showEmojView:emoji,
      showMoreView:more,
    })
  }
  /**
   * 点击+号弹出的条目点击事件
   * @param  {[type]} itemData [description]
   * @return {[type]}          [description]
   */
  _onItemClick = (itemData)=>{

    switch (itemData.id) {
      //相册
      case 1:

      break;
      //拍摄
      case 2:
      alert("id"+itemData.id+"--"+itemData.title)
        break ;
      case 3:
      alert("id"+itemData.id+"--"+itemData.title)
        break;
      case 4:
      alert("id"+itemData.id+"--"+itemData.title)
        break ;

      case 5:
     alert("id"+itemData.id+"--"+itemData.title)
        break;
      case 6:
      alert("id"+itemData.id+"--"+itemData.title)
        break ;
      case 7:
      alert("id"+itemData.id+"--"+itemData.title)
       break;
      case 8:
      alert("id"+itemData.id+"--"+itemData.title)
       break ;
    case 9:
      alert("id"+itemData.id+"--"+itemData.title)
      break ;

      default:

    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
