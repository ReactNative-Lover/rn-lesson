/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList
} from 'react-native';

//导入没有 TitleBar 的父组件
import BaseNoTitleBarComponent from '../common/BaseNoTitleBarComponent'
import CommonTitleBar from '../component/CommonTitleBar'
import ImageAndText from '../component/ImageAndText'
import Screen from '../common/Screen'


let sections = [
     { key: "1", title:'腾讯服务',
     data: [
       { id:1,
         datas:[
           { id:1,title:"信用卡还款",img:require('../../imgs/ic_common.png')},
           { id:2,title: "手机充值",img:require('../../imgs/ic_common.png')},
           { id:3,title: "理财通",img:require('../../imgs/ic_common.png')},
           { id:4,title: "生活缴费",img:require('../../imgs/ic_common.png')},
           { id:5,title: "Q币充值",img:require('../../imgs/ic_common.png')},
           { id:6,title: "城市服务",img:require('../../imgs/ic_common.png')},
           { id:7,title: "腾讯公益",img:require('../../imgs/ic_common.png')}
     ]
   }
   ]
    },
     { key: "2", title:'限时推广',
     data: [
       { id:2,datas:[
        {title: "膜拜单车",img:require('../../imgs/ic_common.png') },
       { id:9,title: "腾讯王卡",img:require('../../imgs/ic_common.png') },

     ]
   }
   ]
   },
     { key: "3", title:'第三方服务',
     data: [
      {id:3, datas:[
         {id:10, title: "火车票机票",img:require('../../imgs/ic_common.png')},
         {id:11, title: "滴滴出行",img:require('../../imgs/ic_common.png')},
         {id:12, title: "京东优选",img:require('../../imgs/ic_common.png')},
         {id:13, title: "美团外卖",img:require('../../imgs/ic_common.png')},
         {id:14, title: "电影演出赛事",img:require('../../imgs/ic_common.png')},
         {id:15, title: "听喝玩乐",img:require('../../imgs/ic_common.png')},
         {id:16, title: "洒店",img:require('../../imgs/ic_common.png')},
         {id:17, title: "蘑菇街女装",img:require('../../imgs/ic_common.png')},
         {id:18, title: "58到家",img:require('../../imgs/ic_common.png')},
       ]
     }
     ]
   }
];
/**
 * 钱包界面
 * @author TigerChain
 * @type {Object}
 */
export default class Wallet extends BaseNoTitleBarComponent {
  render() {
    const {params} = this.props.navigation.state
    return (
      <View style={styles.container}>
        <CommonTitleBar
          nav={this.props.navigation}
          backTitle={params.titleName}
          rightRimg={require('../../imgs/wechatMore.png')}
          onRightButtonClick={this._onRightButtonClick}
        />


        <SectionList
         renderSectionHeader={this._sectionComp}
         renderItem={this._renderItem}
         sections={sections}
         showsVerticalScrollIndicator={false}
         ItemSeparatorComponent={() => <View><Text></Text></View>}
         ListHeaderComponent={this._renderHeadView}
          keyExtractor = {this._createUniqueKey}

       />
      </View>
    );
  }

  _onRightButtonClick = ()=>{
    alert('更多')
  }

  _createUniqueKey = (item ,index)=>{
    return "index"+index+item;
  }

/**
 * 渲染条目 每个条目中的宫格放入到一个 View 中
 * @param  {[type]} info [description]
 * @return {[type]}      [description]
 */
  _renderItem = (info) => {
    // 取得行数
    // let rows = parseInt(info.item.datas.length%3==0?info.item.datas.length/3:info.item.datas.length/3+1)
    // alert(rows)
  return (
    <View key={info.section.key} style={styles.containeItemView}>
      {
        info.item.datas.map((item,i)=>this.renderGridView(item,i,info.item.datas))
      }
    </View>
  )
}

/**
 * 渲染宫格列表
 * @param  {[type]} item [description]
 * @param  {[type]} i    [description]
 * @return {[type]}      [description]
 */
renderGridView = (item,i,datas)=>{

  return(
    // 最后个宫格，没有底部边框，每个最右边的宫格没有右边的边框,并且一行小于3个也是没有底框
    <View  key = {i} style={[styles.imgViewCommon, (i+1)%3==0?null:styles.lineRight,datas.length==(i+1)|| datas.length<=3?null:styles.lineCenter ]}>
      <ImageAndText style={styles.imgView} img={item.img} title={item.title} />
    </View>
  )
}

/*渲染分组头*/
_sectionComp = (info) => {
  var txt = info.section.title;
  return <Text
    style={styles.parentList}>{txt}</Text>
}

/**
 * 渲染头部组件
 * @return {[type]} [description]
 */
_renderHeadView = ()=>{
  return(
    <View style={styles.headView}>
      <ImageAndText title='收付款' style={styles.imgView} img={require('../../imgs/ic_paymentrec.png')} textColor='white' textfontSize={16}/>
      <ImageAndText title='零钱' subTitle='$4.96' style={styles.imgView} img={require('../../imgs/ic_change.png')} textColor='white' textfontSize={16}/>
      <ImageAndText title='银行卡' style={styles.imgView} img={require('../../imgs/ic_my_wallet.png')} textColor='white' textfontSize={16}/>
    </View>
  )
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:30,
    paddingLeft:30,
    paddingTop:20,
    backgroundColor:'gray',
    height:150,
  },
  imgView:{
  },
  //标题组件
  parentList:{
   backgroundColor:"#d4d4d4",
   textAlignVertical:'center',
   height:40,
   paddingLeft:18
 },
 //包含宫格组件的View
 containeItemView:{
   flexDirection:'row',
   flex:1,
   flexWrap: 'wrap',
   alignItems: 'flex-start',
   backgroundColor:'white'
 },
 imgViewCommon:{
   justifyContent: 'center',
   width: Screen.width / 3,
   height: Screen.width / 3,
   alignItems: 'center',
   borderColor: '#d4d4d4'
 },
  lineRight: {
  borderRightWidth: Screen.onePixel,
  borderColor: '#d4d4d4',
},
lineCenter: {
  borderBottomWidth: Screen.onePixel,
  borderColor: '#d4d4d4',
},
});
