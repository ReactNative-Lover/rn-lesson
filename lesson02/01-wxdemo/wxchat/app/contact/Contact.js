/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Image,
  TouchableHighlight,
} from 'react-native';

import SideBar from '../component/SideBar'
import Toast, {DURATION} from 'react-native-easy-toast'
/**
 * @author TigerChain
 * @type {Object}
 * 通讯录界面
 */

//头数据
let headViewData = [
  {
    key:1,
    img:require('../../imgs/ic_new_friends.png'),
    title:'新的朋友'
  },
  {
    key:2,
    img:require('../../imgs/ic_group_chat.png'),
    title:'群聊'
  },
  {
    key:3,
    img:require('../../imgs/ic_tag.png'),
    title:'标签'
  },
  {
    key:4,
    img:require('../../imgs/ic_common.png'),
    title:'公众号'
  }
]


export default class Contact extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/* 微信通讯录多种方式可以实现，可以使用 SectionList + Header实现，也呆以根据 SectionList 本身支持多种布局方式来实现 */}
        <SectionList
          sections={[
          {key: 's1',renderItem: this._renderItemOrHeadView, data: headViewData},

          { key: "A", data: [{ title: "AAA正在输入....",img:require('../../imgs/ic_common.png') }, { title: "Abigale",img:require('../../imgs/ic_common.png')  }, { title: "阿松",img:require('../../imgs/ic_common.png')  }]},
          { key: "B", data: [{ title: "白森" ,img:require('../../imgs/ic_common.png')  }, { title: "斌果果" ,img:require('../../imgs/ic_common.png') }, { title: "表弟",img:require('../../imgs/ic_common.png')  }, { title: "表姐" }, { title: "表叔" }]},
          { key: "C", data: [{ title: "陈龙",img:require('../../imgs/ic_common.png')  }, { title: "陈文涛",img:require('../../imgs/ic_common.png')  },{title:"车友会",img:require('../../imgs/ic_common.png') }] },
          { key: "D", data: [{ title: "淡然" ,img:require('../../imgs/ic_common.png') }, { title: "段玉龙" },{title:"德行"},{title:"第一名"}] },
          { key: "W", data: [{ title: "王磊", }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }]},
        ]}
        //去掉垂直滚动条
        showsVerticalScrollIndicator={false}
        // 头部标签
        renderSectionHeader={this._renderSectionItem}
        //渲染列表
        renderItem={this._renderItemOrHeadView}
        //分隔线
        ItemSeparatorComponent={()=>{
          return(
              <View style={{height:1,backgroundColor:'#eeeeee'}}></View>
          )
        }}
        />
        {/* 侧边栏，没有添加手势，所以不能滑动，你就点击吧先 */}
        <SideBar
        _onLetterSelect={(letter)=>{
           this.refs.toast.show(letter);
        }}/>
        <Toast
             ref="toast"
             style={{backgroundColor:'#e3e3e3',width:80,height:80,justifyContent:'center',alignItems:'center'}}
             position='center'
             textStyle={{color:'white',fontSize:38}}
        />
      </View>
    );
  }

/**
 * 渲染列表 或是头部列表
 * @param  {[type]} info [description]
 * @return {[type]}      [description]
 */
_renderItemOrHeadView = (info) => {
  var txt = '  ' + info.item.title;
  const { navigate } = this.props.navigation;
  return(
    <TouchableHighlight
      activeOpacity={0.7}
      underlayColor="#e3e3e3"
      onPress={()=>{
        navigate('ContactDetail')
      }}
      >
    <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10,paddingTop:7,paddingBottom:7,alignItems:'center'}}>
      <Image source={info.item.img?info.item.img:require('../../imgs/ic_list_icon.png')} style={{width:35,height:35}}></Image>
      <Text
        style={{ textAlignVertical: 'center', color: '#5C5C5C', fontSize: 15,marginLeft:7 }}>{txt}</Text>
   </View>
     </TouchableHighlight>
    )
}


/**
 * 渲染头标签 A B C
 * @param  {[type]} info [description]
 * @return {[type]}      [description]
 */
  _renderSectionItem = (info) =>{
    var txt = info.section.key;
    if(txt==='s1'){
       return null
    }
    return(
        <Text style={{backgroundColor:'#eeeeee',height:25,paddingLeft:10,textAlignVertical:'center'}}>{txt}</Text>
    )
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'white'
  },
});
