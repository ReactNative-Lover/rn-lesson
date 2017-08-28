/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableHighlight,
  PixelRatio
} from 'react-native';

import CommonTitleBar from '../component/CommonTitleBar'

import Screen  from '../common/Screen'

let cols = 3;
let boxW = 80;
// let wMargin = (Screen.width-100 - cols * boxW) / (cols + 1);

let listDatas = [
  {
    key:1,
    data:{
      avator:require('../../imgs/avator.png'),
      uname:'TigerChain',
      content:'这是一个好日子，我们都是应该喜欢者呀',
      imgs:[
        {img:require('../../imgs/ic_common.png')},
        {img:require('../../imgs/ic_common.png')},
        {img:require('../../imgs/ic_common.png')},
        {img:require('../../imgs/ic_common.png')},
        {img:require('../../imgs/ic_common.png')},
        {img:require('../../imgs/ic_common.png')}
      ],
      address:'西安.钟楼',
      sendtime:'20分钟前'
    }
  },
  {
    key:2,
    data:{
      avator:require('../../imgs/avator.png'),
      uname:'TigerChain',
      content:'这是一个好日子，我们都是应该喜欢者呀',
      imgs:[
        {img:require('../../imgs/ic_common.png')},
        {img:require('../../imgs/ic_common.png')},
        {img:require('../../imgs/ic_common.png')},
        {img:require('../../imgs/ic_common.png')},
        {img:require('../../imgs/ic_common.png')},
        {img:require('../../imgs/ic_common.png')}
      ],
      address:'西安.钟楼',
      sendtime:'20分钟前'
    }
  }

]

/**
 * 朋友圈
 * @type {Object}
 */
export default class FriendCircle extends Component {


  // 隐藏掉 TitleBar 当然也可以设置，一个个设置有点复，我们封装一个组件
  static navigationOptions = {
    header:null
  }

  render() {
    // 取得导航组件传过来的参数
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

        <ScrollView
           showsVerticalScrollIndicator={false}
           horizontal={false}>
          <Image source={require('../../imgs/ic_tiger.png')} style={styles.headBgImg}></Image>
          <View style={styles.avatorView}>
            <Text style={styles.unameTxt}>TigerChain</Text>
            <Image source={require('../../imgs/avator.png')}  style={{width:100,height:100}}></Image>
          </View>
          <View style={styles.listView}>
            <FlatList
              data={listDatas}
              renderItem={this._renderItem}
              ItemSeparatorComponent={this._separatorComponent}
            />
          </View>

        </ScrollView>

      </View>
    );
  }

/**
 * 渲染列表
 * @param  {[type]} item  [description]
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */
  _renderItem = ({item,index}) => {
    return(
      <TouchableHighlight
        activeOpacity={0.7}
        underlayColor="#e3e3e3"
        onPress={()=>{
          // alert(item.title)
        }}
        >
          <View key={item.key} style={{flexDirection:'row',marginTop:20,marginBottom:15}}>
            <Image source={item.data.avator} style={{width:45,height:45}}></Image>

            <View style={styles.rightView}>
              <Text style={styles.unameStyle}>{item.data.uname}</Text>
              <Text style={styles.contentStyle}>{item.data.content}</Text>


              <View style={{ flexDirection:'row',flexWrap:'wrap',marginTop:7,marginLeft:-5}}>
                {this._renderGridView(item.data.imgs)}
              </View>

              <Text style={styles.addressStyle}>{item.data.address}</Text>

              <View style={styles.commentView}>
                <Text style={styles.timeStyle}>{item.data.sendtime}</Text>
                <Image style={styles.commentImg} source={require('../../imgs/ic_comment.png')} />
              </View>
            </View>


          </View>
      </TouchableHighlight>
    )

  }

  /**
   * 设置分隔线
   * @return {[type]} [description]
   */
  _separatorComponent = ()=>{
    return(
      <View style={{height: 1 / PixelRatio.get(),backgroundColor:'#d3d3d3'}}></View>
    )
  }

/**
 * 渲染宫格图片View
 * @param  {[type]} datas [description]
 * @return {[type]}       [description]
 */
  _renderGridView = (datas) =>{
    //定义一个宫格 View
    let gridView = []
    datas.map((data,i)=>{
      gridView.push(
        <View style={styles.gridViewStyle} key={i}>
        <Image source={data.img} style={{width:80,height:80}}/>
      </View>
      )
    })

    return gridView
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //头像 view 的样式
  avatorView:{
    flexDirection:'row',
    marginTop:-65,
    justifyContent:'flex-end',
    marginRight:10
  },
  // 用户名样式
  unameTxt:{
    color:'white',
    marginRight:15,
    fontSize:20,
    marginTop:20
  },
  // 头图片背景样式
  headBgImg:{
    width:Screen.width,
    height:200
  },
  //列表样式
  listView:{
    paddingLeft:10,
    paddingRight:10
  },
  //列表右边的样式
  rightView:{
    marginLeft:10
  },
  unameStyle:{
    fontSize: 15,
    color: '#54688D'
  },
  commentView:{
    flexDirection: 'row',
    marginTop: 7,
    justifyContent:'space-between',
    paddingRight:50
  },
  contentStyle:{
    color:'black',
    fontSize:14
  },
  addressStyle:{
    fontSize: 12,
    color:'#54688D',
    marginTop:7,
  },
  timeStyle:{
    color:'#999999',
    fontSize:12,
  },
  commentImg:{
    width: 25,
    height: 17,
  },

  gridViewStyle:{
    width:boxW,
    height:boxW,
    marginLeft:5,
    marginTop:5,
    alignItems:'center',
  }

});
