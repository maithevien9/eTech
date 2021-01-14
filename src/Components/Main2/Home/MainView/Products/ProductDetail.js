import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProductDetail = (props) => {
  const {t, i18n} = useTranslation();
  var i = 0;
  const route = useRoute();
  const HandleCall = () => {
    Linking.openURL(`tel:${route.params.e.Phone}`);
  };
  const HandleMessage = async () => {
    Linking.openURL(
      `sms:${route.params.e.Phone}?body=Tôi muốn mua gói hàng của bạn`,
    );
  };
  const HandleMap = () => {
    var latitude = 16.047559536535516;
    var longitude = 108.17248364031836;
    Linking.canOpenURL(`geo:${latitude},${longitude}`).then((supported) => {
      if (supported) {
        Linking.openURL(`geo:${latitude},${longitude}`);
      } else {
        console.log("Don't know how to go");
      }
    });
  };
  return (
    <View>
      <View style={styles.wrapperTextHeader}>
        <Text style={styles.textMain2}>{t('PackageDetail')}</Text>
      </View>

      <View style={styles.wrapperInforProduct}>
        <View style={styles.wrapperInforProductInLine}>
          <Text style={styles.styleTextInforProduct}>{t('Package')}: </Text>
          <Text style={styles.styleTextInforProduct}>
            {route.params.e.Cart.map((data) => data.Name + ', ')}
          </Text>
        </View>
        <View style={styles.wrapperInforProductInLine}>
          <Text style={styles.styleTextInforProduct}>{t('Price')}: </Text>
          <Text style={styles.styleTextInforProduct}>
            {route.params.e.Price}
          </Text>
        </View>
        <View style={styles.wrapperInforProductInLine}>
          <Text style={styles.styleTextInforProduct}>{t('Phone')}: </Text>
          <Text style={styles.styleTextInforProduct}>
            {route.params.e.Phone}
          </Text>
        </View>
        <View style={styles.wrapperInforProductInLine}>
          <Text style={styles.styleTextInforProduct}>
            {t('CreateAtTime')}:{' '}
          </Text>
          <Text style={styles.styleTextInforProduct}>
            {route.params.e.CreateAtTime}
          </Text>
        </View>
        <View style={styles.wrapperInforProductInLine}>
          <Text style={styles.styleTextInforProduct}>{t('Address')}: </Text>
          <Text style={styles.styleTextInforProduct}>
            {route.params.e.Address}
          </Text>
        </View>
      </View>
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
        {route.params.e.Cart.map((e) => (
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
      <View style={styles.wrapperBtnCustomer}>
        <TouchableOpacity style={styles.wrapperBtnDetail} onPress={HandleCall}>
          <Text style={styles.StyleTextBtn}>{t('Call')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.wrapperBtnDetail}
          onPress={HandleMessage}>
          <Text style={styles.StyleTextBtn}>{t('Message')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperBtnDetail} onPress={HandleMap}>
          <Text style={styles.StyleTextBtn}>Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperDetailCart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderBottomWidth: 0.7,
    height: windowHeight / 20,
    width: '92%',
    marginHorizontal: '2%',
    alignItems: 'center',
  },
  wrapperDetailCart2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderBottomWidth: 0.5,
    height: windowHeight / 22,
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
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginHorizontal: '1%',
  },
  textMain2: {
    fontSize: 30,
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
    marginTop: '5%',
    marginLeft: '4%',
    height: windowHeight / 2.7,
  },
  wrapperScore: {
    flexDirection: 'row',
  },
  wrapperTextHeader: {
    alignItems: 'center',
    marginTop: '5%',
  },
  wrapperBtnCustomer: {
    justifyContent: 'space-around',
    marginTop: '29%',
    height: windowHeight / 15,
    width: '90%',
    borderRadius: 10,
    marginLeft: '5%',
    flexDirection: 'row',
  },
  wrapperInforProduct: {
    marginTop: '12%',
    height: windowHeight / 4.5,
  },
  wrapperInforProductInLine: {
    marginLeft: '5%',
    height: windowHeight / 22,
    flexDirection: 'row',
  },
  styleTextInforProduct: {
    fontSize: 12,
    fontFamily: 'Roboto',

    color: 'black',
  },
  wrapperBtnDetail: {
    height: windowHeight / 15,
    width: '30%',

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#009966',
  },
  StyleTextBtn: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ProductDetail;
