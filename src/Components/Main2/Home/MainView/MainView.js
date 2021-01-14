import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Picker,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import IcSearch from '../../../../Images/Icons/Search.png';
import Swiper from 'react-native-swiper';
import icBox from '../../../../Images/Icons/paper1.png';

// var ScrollableTabView = require('react-native-scrollable-tab-view');
var ScrollableTabView = require('react-native-scrollable-tab-view');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthImageICSearch = (windowHeight * 0.5) / 10;
const MainView = (props) => {
  const navigation = useNavigation();
  const [dataCheck, setDataCheck] = useState(false);
  const [dataCheckProduct, setDataCheckProduct] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('Đà Nẵng');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [selectedValue3, setSelectedValue3] = useState('Nhựa');
  const [selectedValue4, setSelectedValue4] = useState('');
  const [arrDataProduct, setArrDataProduct] = useState({
    ' ': '',
    HDPE: 'HDPE',
    PET: 'PET',
    PE: 'PE',
  });
  var options = {
    '': '',
    HDPE: 'HDPE',
    PET: 'PET',
    PE: 'PE',
  };
  const {t, i18n} = useTranslation();
  const HandleChangArrayProduct = (value) => {
    if (value === 0) {
      console.log(0);
      setArrDataProduct({
        ' ': '',
        HDPE: 'HDPE',
        PET: 'PET',
        PE: 'PE',
      });
    }
    if (value === 1) {
      setArrDataProduct({
        ' ': '',
        Giấy: 'Giấy',
        Thùng: 'Thùng',
      });
    }
    if (value === 2) {
      setArrDataProduct({
        ' ': '',
        Sắt: 'Sắt',
        Nhôm: 'Nhôm',
      });
    }
  };
  const HandleProductDetail = (e) => {
    navigation.navigate('ProductDetail', {e});
  };
  const HandleSearch = () => {
    navigation.navigate('ListProducts');
  };
  const HanldeAdress = () => {
    setDataCheckProduct(false);
    setDataCheck(!dataCheck);
  };
  const main = dataCheck ? (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Picker
        selectedValue={selectedValue1}
        style={{
          height: (windowHeight * 0.5) / 10,
          width: (windowWidth * 10) / 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        itemStyle={{
          backgroundColor: 'grey',
          color: 'blue',
          fontFamily: 'Ebrima',
          fontSize: 17,
        }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue1(itemValue);
        }}>
        <Picker.Item label="Đà Nẵng" value="Đà Nẵng" />
      </Picker>
      <Picker
        selectedValue={selectedValue2}
        style={{
          height: (windowHeight * 0.5) / 10,
          width: (windowWidth * 10) / 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        itemStyle={{
          backgroundColor: 'grey',
          color: 'blue',
          fontFamily: 'Ebrima',
          fontSize: 17,
        }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue2(itemValue);
        }}>
        <Picker.Item label=" " value=" " />
        <Picker.Item label="Hải Châu" value="Hải Châu" />
        <Picker.Item label="Liên Chiểu" value="Liên Chiểu" />
        <Picker.Item label="Cẩm Lệ" value="Cẩm Lệ" />
        <Picker.Item label="Thanh Khê" value="Thanh Khê" />
        <Picker.Item label="Ngũ Hành Sơn" value="Ngũ Hành Sơn" />
        <Picker.Item label="Sơn Trà" value="Sơn Trà" />
      </Picker>
      <View style={styles.wrapperBtnAddress}>
        <Text style={styles.StyleTextBtn}> {t('Search')}</Text>
      </View>
    </View>
  ) : (
    <View></View>
  );
  const main2 = dataCheckProduct ? (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Picker
        selectedValue={selectedValue3}
        style={{
          height: (windowHeight * 0.5) / 10,
          width: (windowWidth * 10) / 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        itemStyle={{
          backgroundColor: 'grey',
          color: 'blue',
          fontFamily: 'Ebrima',
          fontSize: 17,
        }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue3(itemValue);

          HandleChangArrayProduct(itemIndex);
        }}>
        <Picker.Item label="Nhựa" value="Nhựa" />
        <Picker.Item label="Giấy" value="Giấy" />
        <Picker.Item label="Kim Loại" value="Kim Loại" />
      </Picker>
      <Picker
        selectedValue={selectedValue4}
        style={{
          height: (windowHeight * 0.5) / 10,
          width: (windowWidth * 10) / 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        itemStyle={{
          backgroundColor: 'grey',
          color: 'blue',
          fontFamily: 'Ebrima',
          fontSize: 17,
        }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue4(itemValue);
          console.log(itemValue);
        }}>
        {/* <Picker.Item label=" " value=" " />
        <Picker.Item label="HDPE" value="HDPE" />
        <Picker.Item label="PET" value="PET" /> */}
        {Object.keys(arrDataProduct).map((key) => {
          return <Picker.Item label={key} value={key} key={key} />; //if you have a bunch of keys value pair
        })}
      </Picker>
      <View style={styles.wrapperBtnAddress}>
        <Text style={styles.StyleTextBtn}>Tìm kiếm</Text>
      </View>
    </View>
  ) : (
    <View></View>
  );

  const HandleProduct = () => {
    setDataCheck(false);
    setDataCheckProduct(!dataCheckProduct);
  };
  return (
    <View style={styles.wrapperMain}>
      <View style={styles.WrapperSearch}>
        <TouchableOpacity
          style={styles.wrapperImageSearch}
          onPress={HandleSearch}>
          <Image source={IcSearch} style={styles.iconStyle}></Image>
        </TouchableOpacity>
        <TextInput
          style={styles.WrapperTextSearch}
          onChangeText={(text) => setTextSearch(text)}
          value={textSearch}
        />
      </View>
      {/* <View style={styles.wrapperSwiper}>
        <Swiper>
          <View style={styles.slide1}>
            <Text style={styles.text}>Lợi ích của việc phân loại rác</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Tác hại của môi trường</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View> */}
      <View style={styles.wrapperMainCatogory}>
        <View style={styles.WrapperCatogory}>
          <TouchableOpacity
            style={styles.wrapperCatogoryHeader2}
            onPress={HanldeAdress}>
            <Text style={styles.TextCatogory}> {t('Address')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapperCatogoryHeader}>
            <Text style={styles.TextCatogory}> {t('Time')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapperCatogoryHeader}>
            <Text style={styles.TextCatogory}> {t('Price')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapperCatogoryHeader3}
            onPress={HandleProduct}>
            <Text style={styles.TextCatogory}> {t('Product')}</Text>
          </TouchableOpacity>
        </View>
        {main}
        {main2}
        <ScrollView>
          {props.Products.map((e) => (
            <TouchableOpacity
              style={styles.wrapperProduct}
              onPress={() => {
                HandleProductDetail(e);
              }}>
              <Image source={icBox} style={styles.wrapperImage} />
              <View style={styles.wrapperTextInlineProduct}>
                <View style={styles.wrapperRowScore}>
                  <Text style={styles.StyleText}>{t('Package')}: </Text>
                  <View style={styles.wrapperTextAddress}>
                    <Text style={styles.StyleText}>
                      {e.Cart.map((data) => data.Name + ', ')}
                    </Text>
                  </View>
                </View>
                <View style={styles.wrapperRowScore}>
                  <Text style={styles.StyleText}>{t('Price')}: </Text>
                  <Text style={styles.StyleText}>{e.Price}</Text>
                </View>
                <View style={styles.wrapperRowScore}>
                  <Text style={styles.StyleText}>{t('Time')}: </Text>
                  <View style={styles.wrapperTextAddress}>
                    <Text style={styles.StyleText}>{e.CreateAtTime}</Text>
                  </View>
                </View>

                <View style={styles.wrapperRowScore}>
                  <Text style={styles.StyleText}>{t('Address')}: </Text>
                  <View style={styles.wrapperTextAddress}>
                    <Text style={styles.StyleText}>{e.Address}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperMain: {
    marginTop: '3%',
    alignItems: 'center',
  },
  wrapperMainCatogory: {
    marginTop: '2%',
    // height: (windowHeight * 5.35) / 10,
    height: (windowHeight * 7.5) / 10,
    width: (windowWidth * 9.7) / 10,
  },
  WrapperSearch: {
    height: (windowHeight * 0.5) / 10 + 2,
    width: (windowWidth * 9.7) / 10,
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: '#009966',
    flexDirection: 'row',
  },
  iconStyle: {
    height: 23,
    width: 23,
  },
  wrapperImageSearch: {
    backgroundColor: '#009966',
    width: widthImageICSearch,
    height: (windowHeight * 0.5) / 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  WrapperTextSearch: {
    height: (windowHeight * 0.5) / 10,
    width: '87%',
  },
  wrapperSwiper: {
    marginTop: '2%',
    height: (windowHeight * 2) / 10,
    width: (windowWidth * 9.7) / 10,
  },
  wrapperBtnAddress: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009966',
    borderRadius: 10,
    width: (windowWidth * 8) / 30,
    height: (windowHeight * 1.2) / 30,
  },
  slide1: {
    height: (windowHeight * 2) / 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#009966',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide2: {
    height: (windowHeight * 2) / 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#009966',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide3: {
    height: (windowHeight * 2) / 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#009966',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  WrapperCatogory: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: (windowHeight * 0.6) / 10,
    width: (windowWidth * 9.7) / 10,
  },
  wrapperCatogoryHeader: {
    height: (windowHeight * 0.5) / 10,
    width: (windowWidth * 9.7) / 40,
    alignItems: 'center',
    justifyContent: 'center',

    borderBottomWidth: 0.5,
  },
  wrapperCatogoryHeader2: {
    height: (windowHeight * 0.5) / 10,
    width: (windowWidth * 9.7) / 40,
    alignItems: 'center',
    justifyContent: 'center',

    borderBottomWidth: 0.5,
  },
  wrapperCatogoryHeader3: {
    height: (windowHeight * 0.5) / 10,
    width: (windowWidth * 9.7) / 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
  TextCatogory: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'black',
    fontWeight: 'bold',
  },
  wrapperProduct: {
    marginLeft: (windowWidth * 0.2) / 10,
    width: (windowWidth * 9.3) / 10,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '3%',
    paddingBottom: '3%',
    marginBottom: '1.5%',
  },
  wrapperImage: {
    marginLeft: (windowWidth * 0.5) / 10,
    height: 50,
    width: 50,
  },
  wrapperHeader: {
    height: 80,
    width: '100%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyleHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
  },
  StyleTextBtn: {
    fontSize: 10,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  wrapperForm: {
    width: '95%',
    height: windowHeight / 8,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingLeft: '3%',
    alignItems: 'center',
    marginBottom: 10,
  },

  wrapperRow: {
    height: windowHeight / 38,
    flexDirection: 'row',
  },
  wrapperRowFull: {
    flexDirection: 'row',
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
    fontSize: 10,
    fontFamily: 'Roboto',
    color: 'black',
  },
  StyleText2: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'red',
    fontWeight: 'bold',
  },
  wrapperTextInlineProduct: {
    marginLeft: '5%',
  },
  wrapperTextAddress: {
    width: (windowWidth * 5) / 10,
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
    Products: state.Products,
  };
}
export default connect(mapStateToProps)(MainView);
