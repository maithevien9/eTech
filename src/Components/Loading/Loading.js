import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {useNavigation} from '@react-navigation/native';
import CheckToken from '../../RestAPI/User/check-token';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

const Loading = (props) => {
  const [selectedTab, setSelectedTab] = React.useState('Home');
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('Authenication');
      async function getDataLogin() {
        // var value = await AsyncStorage.getItem('@save');

        // value = JSON.parse(value);
        // if (value !== null) {
        //   // console.log(value.token);
        //   // console.log(value);
        //   props.dispatch({
        //     type: 'setDataLogin',
        //     data: value,
        //   });
        //   // console.log(props.dataLogin.token + '//////////////////');
        //   if (value.token !== '') {
        //     CheckToken(value.token)
        //       .then((json) => {
        //         var data = JSON.parse(JSON.stringify(json));
        //         //console.log(DataLoginUser);

        //         if (data.dataString === 'THANH_CONG') {
        //           navigation.replace('Main');
        //         } else {
        //           navigation.replace('Authenication');
        //         }
        //       })
        //       .catch((error) => {
        //         console.error(error + 'fail');
        //       });
        //   } else {
        //     navigation.replace('Authenication');
        //   }
        // } else {
        //   navigation.replace('Authenication');
        // }
        navigation.replace('Authenication');
      }
      getDataLogin();
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.StyleText}>ETECH DREAME TEAM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StyleText: {
    color: 'white',
    fontSize: 29,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
  };
}
export default connect(mapStateToProps)(Loading);
