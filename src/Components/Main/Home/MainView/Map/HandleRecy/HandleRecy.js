import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ICTranfer2 from '../../../../../../Images/Icons/open-box2.png';
import ICTranfer1 from '../../../../../../Images/Icons/zoom.png';
import ICTranfer3 from '../../../../../../Images/Icons/checked.png';
import ICArrow from '../../../../../../Images/Icons/right-arrow.png';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import ConfirmRecyAPI from '../../../../../../../src/RestAPI/Carrier/confirm-recy-api';
import {connect} from 'react-redux';
import CreateNotifyADAPI from '../../../../../../RestAPI/Carrier/create-notify-api';
import icCall from '../../../../../../Images/Icons/telephone.png';
import icAddress from '../../../../../../Images/Icons/address.png';
import icUser from '../../../../../../Images/Icons/userApp.png';
import icRecy from '../../../../../../Images/Icons/recycle.png';
const HandleRecy = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const {Name, Address, ID, X, Y, Phone, IDuser} = route.params.e;
  const handleConfirmRecy = () => {
    console.log(props.dataLogin.token);
    ConfirmRecyAPI(props.dataLogin.token, ID, IDuser)
      .then((json) => {
        var data = JSON.parse(JSON.stringify(json));
        //console.log(data);
        CreateNotifyADAPI(
          props.dataLogin.token,
          'Xác nhận đơn hàng vận chuyển',
          IDuser,
        )
          .then((json) => {
            var data = JSON.parse(JSON.stringify(json));
            //console.log(data);
            navigation.navigate('HandleSucess', {
              Name,
              Address,
              ID,
              X,
              Y,
              Phone,
              IDuser,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View>
      <View style={styles.wrapperInLineHeaderImage}>
        <Image style={styles.wrapperImage} source={ICTranfer1} />
        <Image style={styles.wrapperImageAR} source={ICArrow} />
        <Image style={styles.wrapperImage2} source={ICTranfer2} />
        <Image style={styles.wrapperImageAR} source={ICArrow} />
        <Image style={styles.wrapperImage} source={ICTranfer3} />
      </View>
      <View style={styles.wrapperInLineHeader}>
        <Text style={styles.StylteText}>Chọn Gói rác</Text>
        <Text></Text>
        <Text style={styles.StylteText2}>Xác nhận vận chuyển</Text>
        <Text></Text>
        <Text style={styles.StylteText}>Vận chuyển thành công</Text>
      </View>
      <View style={styles.wrapperMain}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: X,
            longitude: Y,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3,
          }}>
          <Marker
            coordinate={{
              latitude: X,
              longitude: Y,
            }}
            title={Name}
            description={Address}
          />
        </MapView>
        <View style={styles.wrapperInLine}>
          <Image style={styles.wrapperImageMain} source={icUser} />
          <Text style={styles.StylteTextMain}>Tên khách hàng: {Name}</Text>
        </View>
        <View style={styles.wrapperInLine}>
          <Image style={styles.wrapperImageMain} source={icCall} />
          <Text style={styles.StylteTextMain}>Số điện thoại: {Phone}</Text>
        </View>
        <View style={styles.wrapperInLine}>
          <Image style={styles.wrapperImageMain} source={icAddress} />
          <Text style={styles.StylteTextMain}>Địa chỉ: {Address}</Text>
        </View>
        <View style={styles.wrapperInLine}>
          <Image style={styles.wrapperImageMain} source={icRecy} />
          <Text style={styles.StylteTextMain}>
            Chi tiết gói hàng: Nhựa: 2kg, Kim loại: 3kg, Giấy: 2kg, Đồ linh tinh
            7g
          </Text>
        </View>
      </View>
      <View style={styles.WrapperBtn}>
        <TouchableOpacity
          style={styles.wrapperTouch}
          onPress={handleConfirmRecy}>
          <Text style={styles.StylteTextBtn}>Xác nhận vận chuyển</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 320,
    marginBottom: '3%',
  },
  wrapperInLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '2%',
    marginTop: '2.5%',
  },
  wrapperInLineHeader: {
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '2%',
    height: '3%',
  },
  wrapperInLineHeaderImage: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '3%',
  },
  WrapperBtn: {
    alignItems: 'center',
    height: '50%',
    marginTop: '10%',
  },
  wrapperImage2: {
    height: 43,
    width: 43,
  },
  wrapperImage: {
    height: 25,
    width: 25,
  },
  wrapperImageMain: {
    height: 15,
    width: 15,
  },
  wrapperImageAR: {
    height: 18,
    width: 18,
  },
  StylteText: {
    width: '20%',
    fontSize: 10,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  StylteText2: {
    width: '20%',
    fontSize: 10,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#009966',
  },
  wrapperMain: {
    marginHorizontal: '0.5%',
    marginTop: '10%',
    height: '55%',
  },
  StylteTextMain: {
    marginLeft: '4%',
    width: '85%',
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginBottom: '1.5%',
  },
  StylteTextMain2: {
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  StylteTextMain3: {
    width: '50%',
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop: '1%',
  },
  wrapperTouch: {
    height: '13%',
    width: '95%',
    backgroundColor: '#009966',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  StylteTextBtn: {
    fontSize: 17,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: 'white',
  },
});

function mapStateToProps(state) {
  return {
    dataLocolRecy: state.dataLocolRecy,
    dataLogin: state.dataLogin,
  };
}
export default connect(mapStateToProps)(HandleRecy);
