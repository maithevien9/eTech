import React, {useState, useEffect} from 'react';
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
import NewRecyclablesAPI from '../../../../../RestAPI/Recyclables/new-recyclables-api';
import CreateNotifyAPI from '../../../../../RestAPI/Notify/create-notify-api';
import {connect} from 'react-redux';
import {Dimensions} from 'react-native';
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
import ICRecy from '../../../../../Images/Icons/metal2.png';
const windowWidth = Dimensions.get('window').width;
const handled = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // console.log(JSON.stringify(props.InforUser));
    // if (
    //   props.InforUser[0].X &&
    //   props.InforUser[0].Y &&
    //   props.InforUser[0].Name &&
    //   props.InforUser[0].Address &&
    //   props.InforUser[0].Phone
    // ) {
    //   props.dispatch({
    //     type: 'setdataCheckLocal',
    //     data: true,
    //   });
    // } else {
    //   props.dispatch({
    //     type: 'setdataCheckLocal',
    //     data: false,
    //   });
    // }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    <ScrollView style={styles.wrapperMain}>
      {/* <TouchableOpacity style={styles.wrapperBtn} onPress={Hanlelevel1}>
        <Text style={styles.TextBtn}>Mức 1</Text>
      </TouchableOpacity> */}

      {props.Cart.map((e) => (
        <View style={styles.wrapperMainCart}>
          <View style={styles.wrapperinLine}>
            <Image source={ICRecy} style={styles.wrapperImage} />
            <View style={styles.wrapperText}>
              <TouchableOpacity
                style={{
                  height: 20,
                  alignSelf: 'flex-end',
                  width: 20,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: '1%',
                  borderRadius: 20,
                  borderColor: 'red',
                }}
                onPress={() => {
                  handleX(e.ID);
                }}>
                <Text style={styles.TextBtnX}>x</Text>
              </TouchableOpacity>
              <Text style={styles.stylesText}>Tên rác tái chế: {e.Name}</Text>
              <Text style={styles.stylesText}>
                Số Lượng: {e.amount}
                {e.Unit.slice(2, 10)}
              </Text>
            </View>
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.wrapperBtn} onPress={HanleRecyBooking}>
        <Text style={styles.TextSubmit}>Đặt lịch vận chuyển</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  TextBtnX: {
    color: 'red',
    fontSize: 15,
  },
  wrapperBtn: {
    marginTop: '10%',
    height: 50,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
  },
  wrapperMain: {
    width: '100%',
    marginTop: '15%',
  },
  wrapperMainCart: {
    height: 90,
    width: '90%',
    marginLeft: '5%',
    borderBottomWidth: 1.5,
    marginBottom: '2%',
  },
  wrapperImage: {
    height: 45,
    width: 45,
  },
  wrapperinLine: {
    flexDirection: 'row',
    marginLeft: '2%',
    alignItems: 'center',
  },
  wrapperText: {
    marginLeft: '6%',
  },
  stylesText: {
    width: windowWidth / 1.4,
    fontSize: 15,
    fontFamily: 'monospace',
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
export default connect(mapStateToProps)(handled);
