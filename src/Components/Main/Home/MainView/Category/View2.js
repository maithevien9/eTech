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
import icPaper1 from '../../../../../Images/Icons/paper1.png';
import icPaper2 from '../../../../../Images/Icons/paper2.png';
import icPaper3 from '../../../../../Images/Icons/paper3.png';

const View2 = (props) => {
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
      <View style={styles.wrapperPlastic}>
        <View style={styles.wrapperMain1}>
          <View style={styles.wrapperheaderPlastic}>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(5, 3000, '1/Kg', 'Carton/Bìa Cứng', icPaper1);
              }}>
              <Image source={icPaper1} style={styles.wrapperImage2} />
              <Text style={styles.wrapperTextHeader2}>Carton/Bìa Cứng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(
                  6,
                  3000,
                  '1/Kg',
                  'Giấy Vở/Văn Phòng',
                  icPaper2,
                );
              }}>
              <Image source={icPaper2} style={styles.wrapperImage2} />
              <Text style={styles.wrapperTextHeader2}>Giấy Vở/Văn Phòng</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.wrapperMain1}>
          <View style={styles.wrapperheaderPlastic}>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(
                  7,
                  3000,
                  '1/Kg',
                  'Sách Báo/Tạp Chí',
                  icPaper3,
                );
              }}>
              <Image source={icPaper3} style={styles.wrapperImage2} />
              <Text style={styles.wrapperTextHeader2}>Sách Báo/Tạp Chí</Text>
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
    marginTop: '27%',
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
    marginTop: '2%',
    width: '96%',
    borderRadius: 40,
    marginLeft: '2%',
    marginBottom: '10%',
  },
  wrapperheaderPlastic: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    borderWidth: 1,
    borderColor: '#009966',
    height: '175%',
    width: '39%',
    // eslint-disable-next-line no-dupe-keys
    alignItems: 'center',
    // eslint-disable-next-line no-dupe-keys
    justifyContent: 'center',
    borderRadius: 15,
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
    marginLeft: '12%',
    width: '70%',
    fontSize: 13,
    fontFamily: 'monospace',
    marginTop: '5%',
    fontWeight: 'bold',
  },
  wrapperheaderMetal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '7%',
    marginTop: '3%',
  },
  wrapperImage2: {
    height: 35,
    width: 35,
    marginTop: '4%',
  },
});
export default View2;
