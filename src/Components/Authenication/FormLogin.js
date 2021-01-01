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
import {useTranslation} from 'react-i18next';
const FormLogin = (props) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [emailLogin, setemailLogin] = React.useState('');
  const [mkLogin, setmkLogin] = React.useState('');

  const HandleLogin = () => {
    if (emailLogin !== '' && mkLogin !== '') {
      navigation.navigate('SelectRole');
    } else {
      navigation.navigate('SelectRole');
    }
  };
  return (
    <View style={styles.wrapperInput}>
      <TextInput
        onChangeText={(text) => setemailLogin(text)}
        value={emailLogin}
        style={styles.textInput}
        placeholder={t('UserName')}
      />
      <TextInput
        onChangeText={(text) => setmkLogin(text)}
        value={mkLogin}
        style={styles.textInput}
        placeholder={t('PassWord')}
      />

      <TouchableOpacity style={styles.Button} onPress={HandleLogin}>
        <Text style={styles.Text2}>{t('SignIn')}</Text>
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
