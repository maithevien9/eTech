import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import icGift from '.././../../../Images/Icons/grade.png';
import {connect} from 'react-redux';

const HistoryRecyclables = (props) => {
  const convertDate = (date) => {
    var ts = new Date(date);
    return ts.toLocaleDateString();
  };
  const convertDate2 = (date) => {
    var ts = new Date(date);
    return ts.toLocaleTimeString();
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>Gói Hàng Đã Bán</Text>
      </View>
      <ScrollView style={styles.wrapperMain}></ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperHeader: {
    height: 80,
    width: '100%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyleHeader: {
    fontSize: 28,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  wrapperMain: {
    marginLeft: '3%',
    marginTop: '3%',
  },
  wrapperForm: {
    width: '95%',
    height: 80,
    borderWidth: 1,
    flexDirection: 'row',
    paddingLeft: '3%',
    alignItems: 'center',
    marginBottom: 10,
  },
  wrapperImage: {
    height: 40,
    width: 40,
    marginRight: '3%',
  },
  wrapperRow: {
    flexDirection: 'row',
  },
  wrapperRowFull: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  wrapperRowGift: {
    flexDirection: 'row',
    width: '60%',
  },
  wrapperRowScore: {
    flexDirection: 'row',
    width: '35%',
  },
  StyleText: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'black',
  },
});

function mapStateToProps(state) {
  return {
    dataCheckLoginSuccess: state.dataCheckLoginSuccess,
    dataLogin: state.dataLogin,
    HistoryRecyclables: state.HistoryRecyclables,
  };
}
export default connect(mapStateToProps)(HistoryRecyclables);
