/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,

  SectionList,
} from 'react-native';


// let datas = [
//   {key:"A",data:[{name:"阿儿法"},{name:"阿杜"},{name:"爱情"},{name:"傲雪凌霜"}]},
//   {key:"B",data:[{name:"比亚迪"},{name:"白手起家"},{name:"白何"},{name:"别林"},{name:"摆放"}]},
//   {key:"C",data:[{name:"曹荣"},{name:"成龙"},{name:"陈文龙"},{name:"超哥"}]},
//   {key:"D",data:[{name:"Divy"},{name:"大哥大"}]},
//   {key:"Z",data:[{name:"张小龙"},{name:"赵云"},{name:"张飞"},{name:"卓越"}]}
//
// ] ;


import Loading from './loading.js' ;

export default class SectionListComponent extends Component {

  /**
   * 异步解析
   * @return {Promise} [description]
   */
   async getPersons(){
     let data = await require('./data/person.json') ;
     let jsonData = data.data;
     let persons = [] ;

     for(let i=0 ;i<jsonData.length;i++){
       let section = {}
       //取得key 即标题
       section.key = jsonData[i].key;
       // 取得每个子项集合
       section.data = jsonData[i].data;
       for(let j=0;j<section.data.length;j++){
        section.data[j].key = j
       }
       persons[i] = section;
     }
     // 更改状态
     this.setState({
       datas:persons,
     })

   }

   constructor(props){
     super(props)
     this.state={
       //数据
       datas:[],
       animating: true,
     }
   }


   componentDidMount(){
     // 模拟请求服务器 耗时操作在些周期中使用
     this.getPersons()
     setTimeout(()=>{
      //2秒钟
      this.setState({
        animating: false,
      })
    },3500) ;
   }

  render() {
    if(this.state.animating){
      return <Loading text={"加载中..."} style={{backgroundColor:'#ffeecc'}}/>

    }
    else{
      return (
        <View style={styles.container}>
          <SectionList
            // 数据源
            sections={this.state.datas}
            // 渲染子项目
            renderItem={this._renderItem}
            // 渲染分组组件
            renderSectionHeader={(info) =>{
              return <Text style={{height:30,textAlignVertical:'center',backgroundColor:'orange',fontSize:16,paddingLeft:7}} onPress={()=>{alert(info.section.key)}}>{info.section.key}</Text>
            }}
            // 不加会报缺少 key 的警告
            keyExtractor={(item, index) => index}
            //添加分隔线
            ItemSeparatorComponent={()=>{
              return <Text style={{height:1,backgroundColor:'#e3e3e3'}}></Text>
            }}
            >
          </SectionList>
        </View>
      );
   }
  }

  /**
   * 渲染每个条目
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  _renderItem = (data) => {
    var txt = '  ' + data.item.name;
    return <Text
      onPress={()=>{alert(txt)}}
      style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
