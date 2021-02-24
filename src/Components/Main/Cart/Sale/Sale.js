import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {AddCartHistory, setCart} from '../../../../Redux/ActionCreators';
import NewRecyclablesAPI from '../../../../RestAPI/Recyclables/new-recyclables-api';
import {useTranslation} from 'react-i18next';
import CreateNotifyAPI from '../../../../RestAPI/Notify/create-notify-api';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Sale = (props) => {
  const {t} = useTranslation();
  var i = 0;
  const [amount, setAmount] = React.useState(0);
  const [Address, setAddress] = React.useState(
    props.InforUser.Address ? props.InforUser.Address : '',
  );
  const [Phone, setPhone] = React.useState(
    props.InforUser.Phone ? props.InforUser.Phone : '',
  );
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    if (
      props.InforUser.Name === '' &&
      props.InforUser.Address === '' &&
      props.Phone === ''
    ) {
      navigation.navigate('ContactUpdate');
    }
  });
  const HanldeSale = () => {
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    var hour = date_ob.getHours();
    var min = date_ob.getMinutes();
    var sec = date_ob.getSeconds();

    var dateTime =
      year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;

    NewRecyclablesAPI(props.dataLogin.token, amount, Address, Phone, props.Cart)
      .then((json) => {
        var data = JSON.parse(JSON.stringify(json));
        if (data.dataString === 'THANH_CONG') {
         
          props.setCart([]);
          CreateNotifyAPI(
            props.dataLogin.token,
            'Gói Hàng',
            'Tạo gói hàng thành công',
          );
          Alert.alert(
            'Nofity',
            'Thành Công',
            [{text: 'OK', onPress: () => navigation.replace('Main')}],
            {cancelable: false},
          );
        } else {
          Alert.alert(
            'Nofity',
            'Không Thành Công',
            [{text: 'OK', onPress: () => navigation.replace('Main')}],
            {cancelable: false},
          );
        }
      })
      .catch((error) => {
        console.error(error + 'fail');
      });
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.Textheader}>{t('PackagePostSales')}</Text>
      </View>
      <View style={styles.wrapperMain}>
        <Text style={styles.textMain}>{t('Price')}</Text>
        <TextInput
          onChangeText={(text) => setAmount(text)}
          value={amount}
          keyboardType="numeric"
          style={styles.textInput}
       
        />
      </View>
      <View style={styles.wrapperMain}>
        <Text style={styles.textMain}>{t('Address')}</Text>
        <TextInput
          onChangeText={(text) => setAddress(text)}
          value={Address}
          style={styles.textInput}
       
        />
      </View>
      <View style={styles.wrapperMain}>
        <Text style={styles.textMain}>{t('Phone')}</Text>
        <TextInput
          onChangeText={(text) => setPhone(text)}
          value={Phone}
          style={styles.textInput}
     
        />
      </View>
      <Text style={styles.textMain2}>{t('PackageDetail')}</Text>
      <ScrollView style={styles.wrapperMain2}>
        <View style={styles.wrapperDetailCart}>
          <View style={styles.stylesSTT}>
            <Text style={styles.stylesText}>STT</Text>
          </View>
          <View style={styles.stylesNameCart}>
            <Text style={styles.stylesText}>{t('NameOfItem')}</Text>
          </View>
          <View style={styles.stylesAmount}>
            <Text style={styles.stylesText}>{t('Amount')}</Text>
          </View>
        </View>
        {props.Cart.map((e) => (
          <View style={styles.wrapperDetailCart2}>
            <View style={styles.stylesSTT}>
              <Text style={styles.stylesText}>{(i = i + 1)}</Text>
            </View>
            <View style={styles.stylesNameCart}>
              <Text style={styles.stylesText}>{e.Name}</Text>
            </View>
            <View style={styles.stylesAmount}>
              <Text style={styles.stylesText}>{e.amount}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.wrapperBtn} onPress={HanldeSale}>
        <Text style={styles.TextSubmit}>{t('confirm')}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperDetailCart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderBottomWidth: 0.7,
    height: windowHeight / 15,
    width: '92%',
    marginHorizontal: '2%',
    alignItems: 'center',
  },
  wrapperDetailCart2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderBottomWidth: 0.7,
    height: windowHeight / 19,
    width: '92%',
    marginHorizontal: '2%',
    alignItems: 'center',
  },
  stylesSTT: {width: '20%'},
  stylesNameCart: {width: '50%'},
  stylesAmount: {width: '20%', alignItems: 'center'},
  stylesText: {fontSize: 12, fontFamily: 'Roboto'},
  wrapperHeader: {
    marginTop: '5%',
    marginBottom: '13%',

    alignItems: 'center',
  },
  wrapperBtn: {
    marginLeft: '5%',
    marginTop: '8%',
    height: '7%',
    width: '90%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
  },
  Textheader: {
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  TextSubmit: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
  },
  textInput: {
    height: 35,
    width: 366,
    borderColor: 'black',
    borderBottomWidth: 0.7,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 14,
  },
  textMain: {
    fontSize: 12,
    fontFamily: 'Roboto',
    marginHorizontal: '1%',
  },
  textMain2: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginHorizontal: '1%',
    marginLeft: '4%',
  },
  wrapperMain: {
    marginTop: '3%',
    marginLeft: '4%',
  },
  wrapperMain2: {
    marginTop: '3%',
    marginLeft: '4%',
    height: windowHeight / 2.7,
  },
  wrapperScore: {
    flexDirection: 'row',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
    Cart: state.Cart,
    InforUser: state.InforUser,
  };
}
export default connect(mapStateToProps, {AddCartHistory, setCart})(Sale);
