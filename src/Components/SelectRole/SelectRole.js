import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import icArrow from '../../Images/Icons/arrowRight.png';
import {useTranslation} from 'react-i18next';
import GetInforUser from '../../RestAPI/User/get-infor-user';
import {setInforUser} from '../../Redux/ActionCreators';
import GetNotify from '../../RestAPI/Notify/get-notify-api';
const SelectRole = (props) => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const handleSelect1 = () => {
    navigation.navigate('Main');
  };
  const handleSelect2 = () => {
    navigation.navigate('Main2');
  };

  useEffect(() => {
    async function getDataLogin() {
      GetInforUser(props.dataLogin.token)
        .then((json) => {
          var InforUser = JSON.parse(JSON.stringify(json));

          props.setInforUser(InforUser.data[0]);
        })
        .catch((error) => {
          console.error(error + 'fail');
        });
    }
    getDataLogin();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.StyleText}>{t('SelectRole')}</Text>
      <TouchableOpacity style={styles.swapperTouch} onPress={handleSelect1}>
        <View style={{width: '29%'}} />
        <Text style={styles.StyleTextBtn}>{t('Collectors')}</Text>
        <Image source={icArrow} style={styles.wrapperImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.swapperTouch} onPress={handleSelect2}>
        <View style={{width: '29%'}} />
        <Text style={styles.StyleTextBtn}>{t('Buyer')}</Text>
        <Image source={icArrow} style={styles.wrapperImage} />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.swapperTouch}>
        <View style={{width: '29%'}} />
        <Text style={styles.StyleTextBtn}>Vựa thu mua</Text>
        <Image source={icArrow} style={styles.wrapperImage} />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#009966',
    alignItems: 'center',
  },
  StyleText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: '5%',
    marginBottom: '60%',
  },
  StyleTextBtn: {
    color: '#009966',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginRight: '20%',
  },
  wrapperImage: {height: 20, width: 20, marginRight: '5%'},
  swapperTouch: {
    height: '8%',
    width: '90%',
    backgroundColor: 'white',
    marginTop: '5%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    InforUser: state.InforUser,
  };
}
export default connect(mapStateToProps, {setInforUser})(SelectRole);
