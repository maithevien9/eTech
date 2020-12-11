import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Handling = () => {
  return (
    <View style={styles.wrapperMain}>
      <View style={styles.wrapper}>
        <Text style={styles.TextBtn}>
          Gói Rác Tái Chế Của Bạn Đang Được chờ Vận chuyển
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '90%',
    borderWidth: 1,
    paddingLeft: '4%',
    backgroundColor: 'yellow',

    borderRadius: 20,
  },
  TextBtn: {
    fontSize: 20,
    fontFamily: 'monospace',
  },
  wrapperMain: {
    marginTop: '15%',
    alignItems: 'center',
  },
});
export default Handling;
