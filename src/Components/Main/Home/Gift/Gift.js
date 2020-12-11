import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import CreateHistoryScore from '../../../../../src/RestAPI/Member/new-history-score';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CreateNotifyAPI from '../../../../RestAPI/Notify/create-notify-api';
const Gift = (props) => {
  const navigation = useNavigation();
  const HandleLevel1 = () => {
    Alert.alert(
      'Thông báo',
      'Bạn có chắn chắn với Mức 1 không ?',
      [
        {
          text: 'Hủy',
          onPress: () => navigation.goBack(),
          style: 'cancel',
        },
        {
          text: 'Đồng ý',
          onPress: () => {
            if (props.Scores >= 1000) {
              // CreateHistoryScore(props.dataLogin.token, 1, 1000)
              //   .then((json) => {
              //     var data = JSON.parse(JSON.stringify(json));
              //     if (data.dataString === 'THANH_CONG') {
              //       props.dispatch({
              //         type: 'MinusPoints',
              //         data: 1000,
              //       });
              //       CreateNotifyAPI(
              //         'Đổi gói quà 1 thành công',
              //         '',
              //         props.dataLogin.token,
              //       )
              //         .then((json) => {
              //           var data = JSON.parse(JSON.stringify(json));
              //           if (data.dataString === 'THANH_CONG') {
              //             // let ts = Date.now();
              //             // let date_ob = new Date(ts);
              //             // let date = date_ob.getDate();
              //             // let month = date_ob.getMonth() + 1;
              //             // let year = date_ob.getFullYear();
              //             // var hour = date_ob.getHours();
              //             // var min = date_ob.getMinutes();
              //             // var sec = date_ob.getSeconds();
              //             // var dateTime =
              //             //   year +
              //             //   '-' +
              //             //   month +
              //             //   '-' +
              //             //   date +
              //             //   ' ' +
              //             //   hour +
              //             //   ':' +
              //             //   min +
              //             //   ':' +
              //             //   sec;
              //             // console.log(dateTime);
              //             // props.dispatch({
              //             //   type: 'addNotify',
              //             //   Name: 'Đổi gói quà 1 thành công',
              //             //   IDUser: props.dataLogin.data[0].ID,
              //             // });
              //             navigation.goBack();
              //           }
              //         })
              //         .catch((error) => {
              //           console.error(error + 'fail');
              //         });
              //     }
              //   })
              //   .catch((error) => {
              //     console.error(error + 'fail');
              //   });
            } else {
              Alert.alert(
                'Thông báo',
                'Bạn chưa đủ điểm',
                [
                  {
                    text: 'Hủy',
                    onPress: () => navigation.goBack(),
                    style: 'cancel',
                  },
                  {
                    text: 'Đồng ý',
                    onPress: () => {
                      navigation.goBack();
                    },
                  },
                ],
                {cancelable: false},
              );
            }
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperTextHeader}>
        <Text style={styles.Textheader}>ĐỔI THƯỞNG</Text>
      </View>
      <View style={styles.wrapperMain}>
        <TouchableOpacity style={styles.wrapperBtn} onPress={HandleLevel1}>
          <Text style={styles.TextBtn}>Mức 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperBtn}>
          <Text style={styles.TextBtn}>Mức 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperBtn}>
          <Text style={styles.TextBtn}>Mức 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperBtn}>
          <Text style={styles.TextBtn}>Mức 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },

  wrapperTextHeader: {
    marginTop: '5%',
  },
  Textheader: {
    fontSize: 25,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },

  wrapperBtn: {
    height: 80,
    width: '90%',
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapperMain: {
    width: '100%',
    alignItems: 'center',
    marginTop: '15%',
  },
  TextBtn: {
    fontSize: 20,
    fontFamily: 'monospace',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
  };
}
export default connect(mapStateToProps)(Gift);
