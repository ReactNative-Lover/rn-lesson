/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { StackNavigator, TabNavigator  } from 'react-navigation';

/**导入首页界面**/
import Home from './home/Home'
/**导入通讯录**/
import Contact from './contact/Contact'
/**导入发现*/
import Find from './find/Find'
/**导入我的界面*/
import Me from './me/Me'

/**导入封装的组件**/
import TabBarIcon from './component/TabBarIcon'

import MorePopWindow from './component/MorePopWindow'

export default class Main extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}

// tab 选项卡以及关联的 界面
const Tab = TabNavigator({
  Home:{
    screen:Home,
    navigationOptions:((navigation) =>({
      tabBarLabel: '微信',
      tabBarIcon: ({focused, tintColor }) => (
        <TabBarIcon
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../imgs/ic_weixin_normal.png')}
          selectedImage={require('../imgs/ic_weixin_selected.png')}
        />

      ),
    }))
  },
  Contact:{
    screen:Contact,
    navigationOptions:((navigation) =>({
      tabBarLabel: '通讯录',
      tabBarIcon: ({focused, tintColor }) => (
        <TabBarIcon
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../imgs/ic_contacts_normal.png')}
          selectedImage={require('../imgs/ic_contacts_selected.png')}
        />
      ),
    }))
  },
  Find:{
    screen:Find,
    navigationOptions:((navigation) =>({
      tabBarLabel: '发现',
      tabBarIcon: ({focused, tintColor }) => (
        <TabBarIcon
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../imgs/ic_find_normal.png')}
          selectedImage={require('../imgs/ic_find_selected.png')}
        />
      ),
    }))
  },
  Me:{
    screen:Me,
    navigationOptions:((navigation) =>({
      tabBarLabel: '我',
      tabBarIcon: ({ focused,tintColor }) => (
        <TabBarIcon
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../imgs/ic_me_normal.png')}
          selectedImage={require('../imgs/ic_me_selected.png')}
        />
      ),
    }))
  }
},
{
  // tab 位于屏幕底部
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#45C018',
    inactiveTintColor: '#999999',
    showIcon:'true',
    //文字的样式
    labelStyle: {
      fontSize: 12,
      marginTop: 0,
      marginBottom: 0,
    },
    // tabbar 的样式
    style: {
      //这个也可以去掉下划线
      marginBottom: -2,
      backgroundColor: '#FCFCFC',
      borderTopColor:'#e3e3e3',
      borderTopWidth:1
    },
    //下划线的高度为0 也就可以去掉下划线
    indicatorStyle:{
      height:0
    }
  },
}
);

const Navigator = StackNavigator(
  // 只要是想要导航的界面都要在这里注册一下
  {
    Tab: { screen: Tab },
  },
  {
    // 由于微信四个tab 页面上面的共用一个titlebar 所以在这里设置就可以，如果每个 title bar 不一样的，则就要去各个界面中去设置了
    navigationOptions: {
        headerTitle:(
          <Text style={{color:'white',fontSize:18,marginLeft:10}}>微信(11)</Text>
        ),
        headerStyle:{
          backgroundColor: '#3E3A39',
          height:48
        },
        headerRight:(
         //  左边搜索按钮和 + 按钮
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity
              onPress={()=>{alert('搜索')}}>
              <View style={{width:45,height:45,justifyContent:'center'}} >
                 <Image source={require('../imgs/ic_search.png')} style={{width:25,height:25}}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{alert('+号')}}>
              <View style={{width:45,height:45,justifyContent:'center',alignItems:'center'}}>
                 <Image source={require('../imgs/ic_add.png')}  style={{width:25,height:25}}></Image>
              </View>
          </TouchableOpacity>
          </View>
        )
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon:{
    width: 25,
    height: 25,
  }
});
