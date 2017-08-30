/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ToastAndroid,
  Image
} from 'react-native';

import Screen from '../common/Screen'

/**
 * 首页 + 号的弹出框
 * @type {Object}
 */

 let mwidth = 180;
 let mheight = 220;
 const top = 50;
 let dataArray;
export default class MorePopWindow extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isVisible: this.props.show,
      }
      mwidth = this.props.width;
      mheight = this.props.height;
      dataArray = this.props.dataArray;
  }

  componentWillReceiveProps(nextProps) {
      this.setState({ isVisible: nextProps.show });
  }

  closeModal() {
      this.setState({
          isVisible: false
      });
      this.props.closeModal(false);
  }

  render() {
      var menuItems = [];
      var icons = this.props.menuIcons;
      var texts = this.props.menuTexts;



      for (let i = 0; i < icons.length; i++) {
        menuItems.push(
          <TouchableOpacity key={i} activeOpacity={0.3} onPress={()=>{
            this.handlePopMenuItemClick(i)
          }} style={styles.itemView}>
              <Image style={styles.imgStyle} source={icons[i]} />
              <Text style={styles.textStyle}>{texts[i]}</Text>
          </TouchableOpacity>
        );
      }
      return (
          <View style={styles.container}>
              <Modal
                  transparent={true}
                  visible={this.state.isVisible}
                  animationType={'fade'}
                  onRequestClose={() => this.closeModal()}>
                  <TouchableOpacity style={styles.container} onPress={() => this.closeModal()}>
                      <View style={styles.modal}>
                          {menuItems}
                      </View>
                  </TouchableOpacity>
              </Modal>
          </View>
      )
  }

  handlePopMenuItemClick = (i) => {
    let navigation = this.props.nav


    switch (i) {
      case 0:

      break;
      case 1:
        break ;
      case 0:

      break;
      case 2:
      navigation.navigate('Qrcode')
      break ;
      case 3:

      break;
      case 4:
      break ;


    }

    this.closeModal();

  }
}

const styles = StyleSheet.create({
  container: {
        width: Screen.width,
        height: Screen.height,
    },
    modal: {
        backgroundColor: '#696969',
        width: mwidth,
        height: mheight,
        position: 'absolute',
        left: Screen.width - mwidth - 10,
        top: top,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemView: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        width: mwidth,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        paddingBottom: 8,
    },
    textStyle: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 5,
    },
    imgStyle: {
        width: 30,
        height: 30,
    }
});
