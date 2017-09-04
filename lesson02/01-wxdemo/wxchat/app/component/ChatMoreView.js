/* @flow weak */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import Screen from '../common/Screen'

import ViewPager from 'react-native-viewpager'

// 定义列数为 4
let cols = 4;
let boxW = 55;
//水平间距的算法
let vMargin  = (Screen.width - cols*boxW)/(cols + 1);
//垂直高度
let hMargin = 25;

/**
 * 聊天界面的 + 号按钮对应的界面
 * @author
 * @type {Object}
 */

let datas = [
  {
    itemData:[
      {id:1,img:require('../../imgs/ic_more_gallery.png'),title:'相册'},
      {id:2,img:require('../../imgs/ic_more_photo.png'),title:'拍摄'},
      {id:3,img:require('../../imgs/ic_more_movie.png'),title:'视频聊天'},
      {id:4,img:require('../../imgs/ic_more_position.png'),title:'位置'},
      {id:5,img:require('../../imgs/icon_more_hb.png'),title:'红包'},
      {id:6,img:require('../../imgs/ic_more_phone.png'),title:'转账'},
      {id:7,img:require('../../imgs/ic_more_card.png'),title:'名片'},
      {id:8,img:require('../../imgs/ic_more_recorder.png'),title:'话音输入'}
    ]
  },
  {
    itemData:[
      {id:9,img:require('../../imgs/ic_more_collection.png'),title:'我的收藏'},

    ]
  }
]

export default class ChatMoreView extends PureComponent {

  constructor(props){
    super(props);
    const dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    this.state = {
       dataSource: dataSource.cloneWithPages(datas)
    }
    // 要把 _renderPage 方法绑定，或者使用箭头函数，否则会出现 undefined is not an object(this2.props.onItemClick)
    this._renderPage = this._renderPage.bind(this)
  }

  render() {
    return (
      <ViewPager
      dataSource={this.state.dataSource}
      renderPage={this._renderPage}
      // onChangePage={this._onChangePage}
      isLoop={false}
      autoPlay={false}/>
    );
  }

  /**
   渲染每个页面，这是ViewPager的方法
    _renderPage = (data,pageID)=>{ } 这是箭头函数写法，这样就不用绑定 this 即构造方法中的   this._renderPage = this._renderPage.bind(this) 这句
  **/

  _renderPage(data: Object, pageID: number | string,) {

  // 定义存放图文组件的View
  let ItemView = []

  //遍历取出生个图文组件放入到View数组中
  data.itemData.map((item,index)=>(
    //把 每个图文组件放到集合 View 中
    ItemView.push(
      <TouchableOpacity
        key={index}
        activeOpacity={0.5}
        onPress={()=>{
            this.props.onItemClick(item)
        }
      }>

      <ImgWidText
        key={index}
        img={item.img}
        text={item.title}
      />
    </TouchableOpacity>
    )
  ))

   return (
     <View style={styles.container}>
       {ItemView}
     </View>
   )
 }
}

/**
 * 定义图片文字组件
 * @type {Object}
 */
class ImgWidText extends PureComponent {
  render(){
    return(
      <View style={styles.imgWidTextViewStyle}>
        <View style={styles.imgContanier}>
          <Image source={this.props.img} style={{width:38,height:38}}/>
        </View>

        <Text style={styles.textView}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'#F4F4F4',
    flexWrap:'wrap', //超出换行
  },
  // 包含图片文字的 View 样式
  imgWidTextViewStyle:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:25,
    marginLeft:vMargin,
  },
  // 包含图片 View 的样式
  imgContanier:{
    justifyContent:'center',
    alignItems:'center',
    width:boxW,
    height:boxW,
    borderColor:'#DFDFDF',
    borderRadius:10,
    borderWidth:Screen.onePixel,
  },
  // 文字样式
  textView:{
    fontSize:12,
    marginTop:5
  }

});

ChatMoreView.propTypes={
  onItemClick:React.PropTypes.func
}
