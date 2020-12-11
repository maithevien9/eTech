import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icPlastic1 from '../../../../Images/Icons/plastic1.png';
import icPlastic2 from '../../../../Images/Icons/plastic2.png';
import icPlastic3 from '../../../../Images/Icons/plastic3.png';
import icPlastic4 from '../../../../Images/Icons/plastic4.png';
import icPlastic5 from '../../../../Images/Icons/plastic5.png';
import icPaper1 from '../../../../Images/Icons/paper1.png';
import icPaper2 from '../../../../Images/Icons/paper2.png';
import icPaper3 from '../../../../Images/Icons/paper3.png';
import icMetal1 from '../../../../Images/Icons/metal1.png';
import icMetal2 from '../../../../Images/Icons/metal2.png';
import icMetal3 from '../../../../Images/Icons/metal3.png';

const category = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();
  const HandleRecyclables = (ID, Score, Unit, Name) => {
    navigation.navigate('CategoryDetail', {
      ID,
      Score,
      Unit,
      Name,
    });
  };
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.wrapperHeader}>
        <Text style={styles.Textheader}>HƯỚNG DẪN PHÂN LOẠI</Text>
      </View>

      <View style={styles.wrapperPlastic}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.wrapperTextHeaderPlastic}>HDPE / PET</Text>
        </View>
        <View style={styles.wrapperMain1}>
          <View style={styles.wrapperheaderPlastic}>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(1, 3000, '1/Kg', 'Chai Nước Uống');
              }}>
              <Text style={styles.wrapperTextHeader2}>Chai Nước Uống</Text>
              <Image source={icPlastic1} style={styles.wrapperImage2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(2, 3000, '1/Kg', 'Gia Vị');
              }}>
              <Text style={styles.wrapperTextHeader2}>Gia Vị</Text>
              <Image source={icPlastic2} style={styles.wrapperImage2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(3, 3000, '1/Kg', 'Chất Tẩy Rửa');
              }}>
              <Text style={styles.wrapperTextHeader2}>Chất Tẩy Rửa</Text>
              <Image source={icPlastic3} style={styles.wrapperImage2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperMain2}>
          <View style={styles.wrapperMain2Parient}>
            <Text style={styles.wrapperText}>NHỰA</Text>
          </View>
        </View>
        <View style={styles.wrapperMain3plastic}>
          <View style={styles.wrapperBottomPlastic}>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(4, 3000, '1/Kg', 'Bao Bì');
              }}>
              <Text style={styles.wrapperTextHeader}>Bao Bì</Text>
              <Image source={icPlastic4} style={styles.wrapperImage} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(5, 3000, '1/Kg', 'Còn Lại');
              }}>
              <Text style={styles.wrapperTextHeader}>Còn Lại</Text>
              <Image source={icPlastic5} style={styles.wrapperImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.wrapperPaper}>
        <View style={styles.wrapperMain1}>
          <View style={styles.wrapperheaderPlastic}>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(6, 3000, '1/Kg', 'Carton/Bìa Cứng');
              }}>
              <Text style={styles.wrapperTextHeader}>Carton/Bìa Cứng</Text>
              <Image source={icPaper1} style={styles.wrapperImage} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(8, 3000, '1/Kg', 'Giấy Vở/Văn Phòng');
              }}>
              <Text style={styles.wrapperTextHeader}>Giấy Vở/Văn Phòng</Text>
              <Image source={icPaper2} style={styles.wrapperImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperMain2}>
          <View style={styles.wrapperMain2Parient}>
            <Text style={styles.wrapperText}>GIẤY</Text>
          </View>
        </View>
        <View style={styles.wrapperMain3}>
          <View style={styles.wrapperBottomPlastic}>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(7, 3000, '1/Kg', 'Sách Báo Tạp Chí/Bưu Phẩm');
              }}>
              <Text style={styles.wrapperTextHeader}>
                Sách Báo Tạp Chí/Bưu Phẩm
              </Text>
              <Image source={icPaper3} style={styles.wrapperImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.wrapperPaper}>
        <View style={styles.wrapperMain1}>
          <View style={styles.wrapperheaderMetal}>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(9, 3000, '1/Kg', 'Phế Liệu');
              }}>
              <Text style={styles.wrapperTextHeader}>Phế Liệu</Text>
              <Image source={icMetal2} style={styles.wrapperImage} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(10, 3000, '1/Kg', 'Vỏ Lon ');
              }}>
              <Text style={styles.wrapperTextHeader}> Vỏ Lon </Text>
              <Image source={icMetal1} style={styles.wrapperImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperMain2}>
          <View style={styles.wrapperMain2Parient}>
            <Text style={styles.wrapperText}> KIM LOẠI</Text>
          </View>
        </View>
        <View style={styles.wrapperMain3}>
          <View style={styles.wrapperBottomPlastic}>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(
                  11,
                  3000,
                  '1/Kg',
                  'Bình Xịt Nén Khí/Hộp Bánh',
                );
              }}>
              <Text style={styles.wrapperTextHeader}>
                Bình Xịt Nén Khí/Hộp Bánh
              </Text>
              <Image source={icMetal3} style={styles.wrapperImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  wrapperBtn: {
    height: 80,
    width: '90%',
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperMain1: {
    height: '15%',
    marginBottom: '3%',
  },
  wrapperMain2Parient: {
    height: '45%',
    width: '45.5%',

    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperText: {
    fontSize: 28,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  wrapperMain2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperMain3: {
    height: '30%',
  },
  wrapperMain3plastic: {
    height: '10%',
  },
  wrapperHeader: {
    marginTop: '5%',
    marginBottom: '20%',

    alignItems: 'center',
  },
  Textheader: {
    fontSize: 25,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  wrapperMain: {
    width: '100%',
    alignItems: 'center',
    marginTop: '25%',
  },
  TextBtn: {
    fontSize: 20,
    fontFamily: 'monospace',
  },
  wrapperPlastic: {
    height: 250,
    width: '96%',
    // backgroundColor: 'yellow',
    borderWidth: 2,
    borderRadius: 40,
    marginLeft: '2%',
    marginBottom: '10%',
    borderStyle: 'dashed',
  },
  wrapperheaderPlastic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '7%',
    marginTop: '3%',
  },
  wrapperTextHeader: {
    fontSize: 13,
    fontFamily: 'monospace',
  },
  wrapperTextHeaderPlastic: {
    fontSize: 19,
    fontFamily: 'monospace',
  },
  wrapperImage: {
    height: 45,
    width: 45,
    marginTop: '4%',
  },
  wrapperheader2Plactic: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperBottomPlastic: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  wrapperPaper: {
    height: 250,
    width: '96%',

    borderWidth: 2,
    borderRadius: 40,
    marginLeft: '2%',
    marginBottom: '10%',
    borderStyle: 'dashed',
  },
  wrapperTextHeader2: {
    fontSize: 10,
    fontFamily: 'monospace',
  },
  wrapperheaderMetal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '7%',
    marginTop: '3%',
  },
  wrapperImage2: {
    height: 30,
    width: 30,
    marginTop: '4%',
  },
});
export default category;
