/* @flow weak */

import React, { PureComponent  } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Button
} from 'react-native';

let datas = [
  {name:'TigerChain',age:28,address:'china'},
  {name:'TigerChain1',age:28,address:'china'},
  {name:'TigerChain2',age:28,address:'china'},
  {name:'TigerChain3',age:28,address:'china'},
  {name:'TigerChain4',age:28,address:'china'},
  {name:'TigerChain5',age:28,address:'china'},
  {name:'TigerChain6',age:28,address:'china'},
  {name:'TigerChain7',age:28,address:'china'},
  {name:'TigerChain8',age:28,address:'china'},
  {name:'TigerChain9',age:28,address:'china'},
  {name:'TigerChain10',age:28,address:'china'},
  {name:'TigerChain11',age:28,address:'china'},
  {name:'TigerChain12',age:28,address:'china'},
  {name:'TigerChain13',age:28,address:'china'},
  {name:'TigerChain14',age:28,address:'china'}
]

export default class List extends PureComponent  {


  constructor(props){
    super(props);
    this.state = {
      data:datas,
      index:0
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <FlatList
            // 数据源
            data={this.state.data}
            // 渲染每条数据
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            // 添加头部
            ListHeaderComponent={this._renderHeader}
            //添加尾部
            ListFooterComponent={this._renderFooter}
            //下拉刷新
            refreshControl={
                 <RefreshControl
                   refreshing={false}
               />
            }
            getItemLayout={(data, index) => ( {length: 80, offset: 80 * index, index} )}
          onEndReachedThreshold={0.5}
          // 实现上拉加载更多
          onEndReached= {(info) =>{
            // alert('到达底部了')
            datas.push({name:'新数据',age:28,address:'china'})
          }}

            ref='FlatList'
            >
            </FlatList>

            <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',justifyContent:'flex-end',bottom:10}}>
              <Text style={{backgroundColor:'green',padding:15,marginRight:5,borderRadius:50}}
                onPress = {()=>{
                  //返回到条目顶部
                  this.refs.FlatList.scrollToIndex({animated: true, index: 0})
                }}
                >返回</Text>
            </View>
      </View>
    );
  }

  //此函数用于为给定的item生成一个不重复的key
  _keyExtractor = (item, index) => item.key;

  _renderItem = ({item,index}) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={
        ()=>{
          alert(index)
        }
      }
    >
      <View style={{backgroundColor:'#ededed',marginLeft:10,marginRight:10,marginTop:5,marginBottom:5,padding:10,height:80}}>
        <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
          <Text style={styles.commonTextStyle}>姓名:{item.name}</Text>
          <Text style={{marginLeft:10}}>年龄:{item.age}</Text>
        </View>
        <Text>地址:{item.address}</Text>
        <Text>序号:{index}</Text>


      </View>

    </TouchableOpacity>
  );

  _renderHeader = ()=>{
    return(
        <Text style={{padding:10,textAlign:'center',backgroundColor:'red'}}>我是头部</Text>
    )
  }

  _renderFooter = ()=>{
    return(
        <Text style={{padding:10,textAlign:'center',backgroundColor:'orange',height:50}}>我是尾部,加载更多...</Text>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commonTextStyle:{
    fontSize:16,
  }
});
