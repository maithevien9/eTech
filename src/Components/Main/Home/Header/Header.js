import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

import icMenu from '../../../../Images/Icons/menu.png';
const {height} = Dimensions.get('window');

class Header extends Component {
  render() {
    return (
      <View
        style={{
          height: 80,
          backgroundColor: '#009966',
          padding: 13,
        }}>
        <View style={styles.wrapper1}>
          <TouchableOpacity
            onPress={this.props.onOpen}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={icMenu} style={styles.iconStyle}></Image>
          </TouchableOpacity>
          <Text style={styles.textStyle}>ETECH DREAM</Text>
          <View style={styles.wrapperWrong} />
        </View>
        {/* <View style={styles.wrapper2}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            onChangeText={(text) => this.setState({text})}
          />
        </View> */}
      </View>
    );
  }
}
export default Header;
const styles = StyleSheet.create({
  text: {
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    height: 35,
    paddingVertical: 6,
    borderColor: '#808080',
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  textInput: {
    marginTop: 10,
    height: 35,
    width: 370,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 13,
    borderRadius: 10,
  },
  wrapper1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  wrapper2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    fontFamily: 'monospace',
    color: 'white',
  },
  wrapperWrong: {
    width: 25,
    height: 25,
  },
  textStyleHeader: {
    fontSize: 28,
    fontFamily: 'monospace',
    color: 'white',
  },
});
