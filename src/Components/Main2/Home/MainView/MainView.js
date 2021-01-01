import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
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
  const [textSearch, setTextSearch] = useState('');
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.wrapperMain}>
      <View style={styles.WrapperSearch}>
        <View style={styles.wrapperImageSearch}>
          <Image source={IcSearch} style={styles.iconStyle}></Image>
        </View>
        <TextInput
          style={styles.WrapperTextSearch}
          onChangeText={(text) => setTextSearch(text)}
          value={textSearch}
        />
      </View>
      <View style={styles.wrapperSwiper}>
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
      </View>
      <View style={styles.wrapperMainCatogory}>
        <View style={styles.WrapperCatogory}>
          <View style={styles.wrapperCatogoryHeader2}>
            <Text style={styles.TextCatogory}>Địa điểm</Text>
          </View>
          <View style={styles.wrapperCatogoryHeader}>
            <Text style={styles.TextCatogory}>Thời gian</Text>
          </View>
          <View style={styles.wrapperCatogoryHeader}>
            <Text style={styles.TextCatogory}>Mức Giá</Text>
          </View>
          <View style={styles.wrapperCatogoryHeader3}>
            <Text style={styles.TextCatogory}>Mặt Hàng</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.wrapperProduct}>
            <Image source={icBox} style={styles.wrapperImage} />
            <View style={styles.wrapperTextInlineProduct}>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Gói Hàng: </Text>
                <View style={styles.wrapperTextAddress}>
                  <Text style={styles.StyleText}>Kim Loại, HDPE, PET,...</Text>
                </View>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Mức Giá: </Text>
                <Text style={styles.StyleText}>22222</Text>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Thời gian: </Text>
                <Text style={styles.StyleText}>22/22/222</Text>
              </View>

              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Địa điểm: </Text>
                <View style={styles.wrapperTextAddress}>
                  <Text style={styles.StyleText}>
                    64 Nhơn Hòa 5, Cẩm Lệ, Đà Nẵng
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.wrapperProduct}>
            <Image source={icBox} style={styles.wrapperImage} />
            <View style={styles.wrapperTextInlineProduct}>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Gói Hàng: </Text>
                <View style={styles.wrapperTextAddress}>
                  <Text style={styles.StyleText}>Kim Loại, HDPE, PET,...</Text>
                </View>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Mức Giá: </Text>
                <Text style={styles.StyleText}>22222</Text>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Thời gian: </Text>
                <Text style={styles.StyleText}>22/22/222</Text>
              </View>

              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Địa điểm: </Text>
                <View style={styles.wrapperTextAddress}>
                  <Text style={styles.StyleText}>
                    64 Nhơn Hòa 5, Cẩm Lệ, Đà Nẵng
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.wrapperProduct}>
            <Image source={icBox} style={styles.wrapperImage} />
            <View style={styles.wrapperTextInlineProduct}>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Gói Hàng: </Text>
                <View style={styles.wrapperTextAddress}>
                  <Text style={styles.StyleText}>Kim Loại, HDPE, PET,...</Text>
                </View>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Mức Giá: </Text>
                <Text style={styles.StyleText}>22222</Text>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Thời gian: </Text>
                <Text style={styles.StyleText}>22/22/222</Text>
              </View>

              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Địa điểm: </Text>
                <View style={styles.wrapperTextAddress}>
                  <Text style={styles.StyleText}>
                    64 Nhơn Hòa 5, Cẩm Lệ, Đà Nẵng
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.wrapperProduct}>
            <Image source={icBox} style={styles.wrapperImage} />
            <View style={styles.wrapperTextInlineProduct}>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Gói Hàng: </Text>
                <View style={styles.wrapperTextAddress}>
                  <Text style={styles.StyleText}>Kim Loại, HDPE, PET,...</Text>
                </View>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Mức Giá: </Text>
                <Text style={styles.StyleText}>22222</Text>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Thời gian: </Text>
                <Text style={styles.StyleText}>22/22/222</Text>
              </View>

              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Địa điểm: </Text>
                <View style={styles.wrapperTextAddress}>
                  <Text style={styles.StyleText}>
                    64 Nhơn Hòa 5, Cẩm Lệ, Đà Nẵng
                  </Text>
                </View>
              </View>
            </View>
          </View>
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
    height: (windowHeight * 5.35) / 10,
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
  slide1: {
    height: (windowHeight * 2) / 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide2: {
    height: (windowHeight * 2) / 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide3: {
    height: (windowHeight * 2) / 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  text: {
    fontSize: 20,
    fontFamily: 'monospace',
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
    fontFamily: 'monospace',
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
    fontFamily: 'monospace',
    color: 'white',
  },
  // wrapperMain: {
  //   marginLeft: '3%',
  //   marginTop: '3%',
  // },
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
    marginBottom: '2%',
    flexDirection: 'row',
    width: '35%',
  },
  StyleText: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'black',
    fontWeight: 'bold',
  },
  StyleText2: {
    fontSize: 12,
    fontFamily: 'monospace',
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
  };
}
export default connect(mapStateToProps)(MainView);
