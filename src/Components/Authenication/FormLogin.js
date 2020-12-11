import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import ICFacebook from '../../Images/Icons/facebook.png';
import ICEmail from '../../Images/Icons/gmail.png';
import SaveDataLogin from '../../AsyncStorage/SaveDataLogin';
import LoginAPI from '../../RestAPI/User/login-api';
import {connect} from 'react-redux';
const FormLogin = (props) => {
  // useEffect(() => {
  //   var url = 'http://localhost:8000/Login';
  //   var myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json');

  //   var raw = JSON.stringify({User: '1', PassWord: '2'});

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow',
  //   };

  //   fetch('http://localhost:8000/Login', requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log('error', error));
  // }, []);
  const navigation = useNavigation();
  const [emailLogin, setemailLogin] = React.useState('');
  const [mkLogin, setmkLogin] = React.useState('');

  const HandleLogin = () => {
    //console.log(emailLogin + '/' + mkLogin);

    if (emailLogin !== '' && mkLogin !== '') {
      // LoginAPI(emailLogin, mkLogin)
      //   .then((json) => {
      //     var DataLoginUser = JSON.parse(JSON.stringify(json));
      //     //console.log(DataLoginUser);

      //     if (DataLoginUser.dataString === 'THANH_CONG') {
      //       if (DataLoginUser.data[0].IDdecentralization === 1) {
      //         props.dispatch({
      //           type: 'setDataLogin',
      //           data: DataLoginUser,
      //         });
      //         SaveDataLogin(DataLoginUser);
      //         console.log('OK');
      //         navigation.navigate('Main');
      //       } else {
      //         Alert.alert(
      //           'Nofity',
      //           'Login not Success',
      //           [
      //             {
      //               text: 'Cancel',
      //               onPress: () => console.log('Cancel Pressed'),
      //               style: 'cancel',
      //             },
      //             {text: 'OK', onPress: () => console.log('OK Pressed')},
      //           ],
      //           {cancelable: false},
      //         );
      //       }
      //     } else {
      //       Alert.alert(
      //         'Nofity',
      //         'Login not Success',
      //         [
      //           {
      //             text: 'Cancel',
      //             onPress: () => console.log('Cancel Pressed'),
      //             style: 'cancel',
      //           },
      //           {text: 'OK', onPress: () => console.log('OK Pressed')},
      //         ],
      //         {cancelable: false},
      //       );
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error + 'fail');
      //   });
      navigation.navigate('SelectRole');
    } else {
      // Alert.alert(
      //   'Nofity',
      //   'Please input Data Login',
      //   [
      //     {
      //       text: 'Cancel',
      //       onPress: () => console.log('Cancel Pressed'),
      //       style: 'cancel',
      //     },
      //     {text: 'OK', onPress: () => console.log('OK Pressed')},
      //   ],
      //   {cancelable: false},
      // );
      navigation.navigate('SelectRole');
    }

    // if (emailLogin !== '' && mkLogin !== '') {
    //   LoginAPI(emailLogin, mkLogin)
    //     .then((json) => {
    //       var DataLoginUser = JSON.parse(JSON.stringify(json));
    //       //setDatalogin(json);
    //       if (DataLoginUser.dataString === 'THANH_CONG') {
    //       }
    //       // .then((json) => {
    //       //   var DataLoginUser = JSON.parse(JSON.stringify(json));
    //       //   console.log(DataLoginUser);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // } else {
    //   Alert.alert(
    //     'Nofity',
    //     'Please input Data Login',
    //     [
    //       {
    //         text: 'Cancel',
    //         onPress: () => console.log('Cancel Pressed'),
    //         style: 'cancel',
    //       },
    //       {text: 'OK', onPress: () => console.log('OK Pressed')},
    //     ],
    //     {cancelable: false},
    //   );
    // }
  };
  return (
    <View style={styles.wrapperInput}>
      <TextInput
        onChangeText={(text) => setemailLogin(text)}
        value={emailLogin}
        style={styles.textInput}
        placeholder="User Name"
      />
      <TextInput
        onChangeText={(text) => setmkLogin(text)}
        value={mkLogin}
        style={styles.textInput}
        placeholder="PassWord"
      />
      {/* <TouchableOpacity style={styles.ButtonFB}>
        <Image style={styles.stretch} source={ICFacebook} />
        <Text style={styles.Text3}>Login with Facebook</Text>
        <View></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonEmail}>
        <Image style={styles.stretch} source={ICEmail} />
        <Text style={styles.Text3}>Login with Email</Text>
        <View></View>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.Button} onPress={HandleLogin}>
        <Text style={styles.Text2}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(FormLogin);
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#088A68',
  },
  wrapperInput: {
    height: 300,
    alignItems: 'center',
    paddingTop: 100,
  },

  textInput: {
    height: 50,
    width: 366,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1.2,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 13,
    borderRadius: 15,
  },

  Button: {
    height: 50,
    width: 366,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1.2,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 65,
  },
  ButtonFB: {
    height: 50,
    width: 366,
    backgroundColor: '#7EC0EE',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',

    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 21,
  },
  ButtonEmail: {
    height: 50,
    width: 366,
    backgroundColor: '#CD9B9B',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Text: {
    color: '#BDBDBD',
    fontSize: 15,

    fontFamily: 'monospace',
  },
  Text2: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  Text3: {
    fontSize: 15,

    fontFamily: 'monospace',
    color: 'white',
  },
});
