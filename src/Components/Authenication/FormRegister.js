import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import registerAPI from '../../RestAPI/User/register-api';
import {useTranslation} from 'react-i18next';
const FormRegister = (props) => {
  const [user, setuser] = useState('');
  const [mk, setmk] = useState('');
  const [mk2, setmk2] = useState('');
  const {t} = useTranslation();
  const HandleRegister = () => {
    if (mk === mk2 && user !== '' && mk !== '') {
      // registerAPI(user, mk)
      //   .then((json) => {
      //     var Data = JSON.parse(JSON.stringify(json));
      //     //console.log(DataLoginUser);
      //     if (Data.dataString === 'THANH_CONG') {
      //       Alert.alert(
      //         'Nofity',
      //         'SUCCESS',
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
      //     } else {
      //       Alert.alert(
      //         'Nofity',
      //         'Register not Success',
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
    } else {
      Alert.alert(
        'Nofity',
        'Please Input Text Again',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  };
  return (
    <View style={styles.wrapperInput}>
      <TextInput
        style={styles.textInput}
        placeholder={t('UserName')}
        onChangeText={(text) => setuser(text)}
        value={user}
      />

      <TextInput
        style={styles.textInput}
        placeholder={t('PassWord')}
        onChangeText={(text) => setmk(text)}
        value={mk}
        secureTextEntry
      />
      <TextInput
        style={styles.textInput}
        placeholder={t('ReEnterPass')}
        onChangeText={(text) => setmk2(text)}
        value={mk2}
        secureTextEntry
      />
      <TouchableOpacity style={styles.Button} onPress={HandleRegister}>
        <Text style={styles.Text2}>{t('SignUp')}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FormRegister;

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
    borderWidth: 1.5,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 13,
    borderRadius: 15,
  },

  Button: {
    height: 50,
    width: 366,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#BDBDBD',
  },
  Text2: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});
