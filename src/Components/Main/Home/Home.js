import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Drawer from 'react-native-drawer';

import {useNavigation} from '@react-navigation/native';

import {connect} from 'react-redux';
import HomeView from './HomeView';
import SaveDataLogin from '../../../AsyncStorage/SaveDataLogin';
import GetHistoryGift from '../../../RestAPI/Gift/get-history-gift-api';
import HistoryScore from '../../../RestAPI/Member/get-history-score-api';
import GetHistoryRecyclables from '../../../RestAPI/Recyclables/get-history-recyclables';
import {LogBox} from 'react-native';
import GetInforUser from '../../../RestAPI/User/get-infor-user';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const Home = (props) => {
  const [value, setvalue] = React.useState();
  const navigation = useNavigation();
  const {dataCheckLoginSuccess} = props;

  const closeControlPanel = () => {
    value.close();
  };
  const openControlPanel = () => {
    value.open();
  };
  const [dataUser, setDataUser] = useState({});

  // useEffect(() => {
  //   dataTemp();
  //   GetInforUser(props.dataLogin.token)
  //     .then((json) => {
  //       var data = JSON.parse(JSON.stringify(json));
  //       console.log(data);
  //       if (data.dataString === 'THANH_CONG') {
  //         props.dispatch({
  //           type: 'setInforUser',
  //           data: data.data,
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error + 'fail');
  //     });
  // });
  const dataTemp = () => {
    if (props.dataLogin.accessToken) {
      props.dispatch({
        type: 'setLoginSuccess',
      });
    } else {
      props.dispatch({
        type: 'setLogout',
      });
    }
  };
  const HandlerLogOut = () => {
    // var data = {
    //   dataString: 'KHONG_THANH_CONG',
    //   data: [],
    //   token: '',
    // };
    // props.dispatch({
    //   type: 'setDataLogin',
    //   data: data,
    // });
    // SaveDataLogin(data);
    navigation.replace('Authenication');
  };
  // const main = dataCheckLoginSuccess ? <Login /> : <Logout />;
  const HandleHistoryGift = () => {
    // GetHistoryGift(props.dataLogin.token)
    //   .then((json) => {
    //     var data = JSON.parse(JSON.stringify(json));
    //     console.log(data);
    //     props.dispatch({
    //       type: 'historyGift',
    //       data: data.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error + 'fail');
    //   });
    navigation.navigate('HistoryGift');
  };
  const HandleHistoryScore = () => {
    // HistoryScore(props.dataLogin.token)
    //   .then((json) => {
    //     var data = JSON.parse(JSON.stringify(json));
    //     console.log(data);
    //     props.dispatch({
    //       type: 'historyScore',
    //       data: data.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error + 'fail');
    //   });
    navigation.navigate('HistoryScore');
  };
  const HandleHistoryRecyclables = () => {
    // GetHistoryRecyclables(props.dataLogin.token)
    //   .then((json) => {
    //     var data = JSON.parse(JSON.stringify(json));
    //     console.log(data);
    //     props.dispatch({
    //       type: 'HistoryRecyclables',
    //       data: data.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error + 'fail');
    //   });
    navigation.navigate('HistoryRecyclables');
  };
  return (
    <View style={{flex: 1}}>
      <Drawer
        tapToClose={true}
        openDrawerOffset={0.2}
        ref={(ref) => setvalue(ref)}
        content={
          <View style={styles.wrapper}>
            <View>
              {/* <Image source={profileImage} style={styles.ImageStyle}></Image> */}
            </View>
            {/* <Text style={styles.textUSer}>Hello</Text> */}
            <View style={{height: 50}} />

            <TouchableOpacity
              style={styles.WrapperBtnLogOut}
              onPress={HandleHistoryGift}>
              <Text style={styles.StyleTextBtn}>Lịch Sử Đổi Quà</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.WrapperBtnLogOut}
              onPress={HandleHistoryScore}>
              <Text style={styles.StyleTextBtn}>Lịch Sử Tích Điểm</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.WrapperBtnLogOut}
              onPress={HandleHistoryRecyclables}>
              <Text style={styles.StyleTextBtn}>Lịch Sử Rác Tái Chế</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.WrapperBtnLogOut2}
              onPress={HandlerLogOut}>
              <Text style={styles.StyleTextBtn}>Đăng Xuất</Text>
            </TouchableOpacity>
          </View>
        }>
        <HomeView open={openControlPanel.bind(this)} />
      </Drawer>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    dataCheckLoginSuccess: state.dataCheckLoginSuccess,
    dataLogin: state.dataLogin,
    historyGift: state.historyGift,
  };
}
export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#009966',
    borderRightWidth: 4,
    borderColor: 'white',
    alignItems: 'center',
    paddingTop: 30,
  },
  ImageStyle: {
    height: 150,
    width: 150,
    borderRadius: 50,
  },
  Button: {
    height: 50,
    width: 250,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  Text: {
    fontSize: 18,
    fontFamily: 'monospace',
    color: '#088A68',
  },
  textUSer: {
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'monospace',
    color: 'black',
    paddingTop: 15,
    paddingBottom: 100,
  },
  WrapperBtnLogOut: {
    height: 60,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 15,
  },
  WrapperBtnLogOut2: {
    height: 60,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: '50%',
  },
  StyleTextBtn: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: 'black',
  },
});
