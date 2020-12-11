import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import icEmail from '../../../Images/Icons/email.png';
import {Dimensions} from 'react-native';
import icPlastic1 from '../../../Images/Icons/plastic1.png';
import icPlastic2 from '../../../Images/Icons/plastic2.png';
import icPlastic3 from '../../../Images/Icons/plastic3.png';
import icPlastic4 from '../../../Images/Icons/plastic4.png';
import icPlastic5 from '../../../Images/Icons/plastic5.png';
import icPaper1 from '../../../Images/Icons/paper1.png';
import icPaper2 from '../../../Images/Icons/paper2.png';
import icPaper3 from '../../../Images/Icons/paper3.png';
import icMetal1 from '../../../Images/Icons/metal1.png';
import icMetal2 from '../../../Images/Icons/metal2.png';
import icMetal3 from '../../../Images/Icons/metal3.png';
import ICRecy from '../../..//Images/Icons/metal2.png';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;
const About = (props) => {
  const navigation = useNavigation();
  const HanleRecyBooking = () => {
    Alert.alert(
      'Thông báo',
      'Bạn có chắn chắn đặt lịch ?',
      [
        {
          text: 'Hủy',
          onPress: () => navigation.replace('Main'),
          style: 'cancel',
        },
        {
          text: 'Đồng ý',
          onPress: () => {
            navigation.replace('Booking');
          },
        },
      ],
      {cancelable: false},
    );
  };
  const handleX = (ID) => {
    console.log(ID);
    props.dispatch({
      type: 'deleteCart',
      ID: ID,
    });
  };
  return (
    <View style={styles.wrapperMain}>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>Giỏ Hàng</Text>
      </View>
      <ScrollView style={styles.wrapperContent}>
        {props.Cart.map((e) => (
          <View style={styles.wrapperMainCart}>
            <View style={styles.wrapperinLine}>
              <Image source={e.Image} style={styles.wrapperImage} />
              <View style={styles.wrapperText}>
                <TouchableOpacity
                  style={{
                    height: 15,
                    alignSelf: 'flex-end',
                    width: 15,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: '1%',
                    borderRadius: 20,
                    borderColor: '#009966',
                  }}
                  onPress={() => {
                    handleX(e.ID);
                  }}>
                  <Text style={styles.TextBtnX}>x</Text>
                </TouchableOpacity>
                <View style={styles.wrapperinLine2}>
                  <Text style={styles.stylesText}>
                    Tên rác tái chế: {e.Name}
                  </Text>
                </View>
                <Text style={styles.stylesText}>
                  Số Lượng: {e.amount}
                  {e.Unit.slice(2, 10)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.wrapperBtn} onPress={HanleRecyBooking}>
        <Text style={styles.TextSubmit}>Đăng bán</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  wrapperHeader: {
    height: (windowHeight * 1) / 10,
    width: '100%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperContent: {
    height: (windowHeight * 7) / 10,
  },
  textStyleHeader: {
    fontSize: 30,
    fontFamily: 'monospace',
    color: 'white',
    fontWeight: 'bold',
  },
  TextBtnX: {
    color: '#009966',
    fontSize: 13,
    fontFamily: 'monospace',

    fontWeight: 'bold',
  },
  wrapperBtn: {
    marginTop: '10%',
    height: (windowHeight * 0.7) / 10,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    marginBottom: (windowHeight * 0.2) / 10,
  },
  wrapperMain: {
    width: '100%',
    height: '100%',
  },
  wrapperMainCart: {
    // height: (windowHeight * 0.9) / 10,
    width: '90%',
    marginLeft: '5%',
    borderBottomWidth: 1.5,
    marginTop: '3%',
    paddingBottom: '4%',
    // justifyContent: 'center',
  },
  wrapperImage: {
    marginTop: '5%',
    height: 35,
    width: 35,
  },
  wrapperinLine: {
    flexDirection: 'row',
    marginLeft: '2%',
    alignItems: 'center',
  },
  wrapperinLine2: {
    flexDirection: 'row',
    // marginLeft: '2%',
    // alignItems: 'center',
  },
  wrapperText: {
    marginLeft: '6%',
  },
  stylesText: {
    width: windowWidth / 1.4,
    fontSize: 13,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  TextSubmit: {
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: 'white',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    InforUser: state.InforUser,
    dataCheckLocal: state.dataCheckLocal,
    Cart: state.Cart,
  };
}
export default connect(mapStateToProps)(About);
