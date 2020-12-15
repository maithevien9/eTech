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
import icPlastic1 from '../../../../../Images/Icons/plastic1.png';
import icPlastic2 from '../../../../../Images/Icons/plastic2.png';
import icPlastic3 from '../../../../../Images/Icons/plastic3.png';
import icPlastic4 from '../../../../../Images/Icons/plastic4.png';
import icPlastic5 from '../../../../../Images/Icons/plastic5.png';
import icPaper1 from '../../../../../Images/Icons/paper1.png';
import icPaper2 from '../../../../../Images/Icons/paper2.png';
import icPaper3 from '../../../../../Images/Icons/paper3.png';
import icMetal1 from '../../../../../Images/Icons/metal1.png';
import icMetal2 from '../../../../../Images/Icons/metal2.png';
import icMetal3 from '../../../../../Images/Icons/metal3.png';

const View3 = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();
  const HandleRecyclables = (ID, Score, Unit, Name, Image) => {
    navigation.navigate('CategoryDetail', {
      ID,
      Score,
      Unit,
      Name,
      Image,
    });
  };
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.wrapperHeader}>
        {/* <Text style={styles.Textheader}>HƯỚNG DẪN PHÂN LOẠI</Text> */}
      </View>

      <View style={styles.wrapperPaper}>
        <View style={styles.wrapperMain1}>
          <View style={styles.wrapperheaderMetal}>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(9, 3000, '1/Kg', 'Phế Liệu', icMetal1);
              }}>
              <Text style={styles.wrapperTextHeader}>Phế Liệu</Text>
              <Image source={icMetal2} style={styles.wrapperImage} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(10, 3000, '1/Kg', 'Vỏ Lon ', icMetal2);
              }}>
              <Text style={styles.wrapperTextHeader}> Vỏ Lon </Text>
              <Image source={icMetal1} style={styles.wrapperImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperMain2}>
          <View style={styles.wrapperMain2Parient}>
            {/* <Text style={styles.wrapperText}> KIM LOẠI</Text> */}
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
                  icMetal3,
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

    borderRadius: 40,
    marginLeft: '2%',
    marginBottom: '10%',
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
export default View3;
