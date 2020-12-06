import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ICTranfer2 from '../../../../../../Images/Icons/open-box.png';
import ICTranfer1 from '../../../../../../Images/Icons/zoom.png';
import ICTranfer3 from '../../../../../../Images/Icons/checked2.png';
import ICArrow from '../../../../../../Images/Icons/right-arrow.png';
import icMap from '../../../../../../Images/Icons/pin.png';
import icCall from '../../../../../../Images/Icons/telephone.png';
import icAddress from '../../../../../../Images/Icons/address.png';
import icUser from '../../../../../../Images/Icons/userApp.png';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';
import RecySuccess from '../../../../../../../src/RestAPI/Carrier/recy-success-api';
import {connect} from 'react-redux';
import CreateNotifyADAPI from '../../../../../../RestAPI/Carrier/create-notify-api';
const HandleSucess = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const HandleMap = (latitude, longitude) => {
    console.log(JSON.stringify(latitude) + ',' + JSON.stringify(longitude));
    Linking.openURL(
      `https://www.google.com/maps/place/21%C2%B001'55.2%22N+105%C2%B049'00.3%22E/@${latitude},${longitude},12.06z/data=!4m5!3m4!1s0x0:0x0!8m2!3d${latitude}!4d${longitude}?hl=vi`,
    ).catch((err) => {
      console.error('Failed opening page because: ', err);
      alert('Failed to open page');
    });
  };
  const handleSuccessRecy = () => {
    RecySuccess(props.dataLogin.token, route.params.ID, route.params.IDuser)
      .then((json) => {
        var data = JSON.parse(JSON.stringify(json));
        //console.log(data);
        CreateNotifyADAPI(
          props.dataLogin.token,
          'Vận chuyển thành công',
          route.params.IDuser,
        )
          .then((json) => {
            var data = JSON.parse(JSON.stringify(json));
            //console.log(data);
            navigation.navigate('Main');
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
        <Image style={styles.wrapperImage} source={ICTranfer2} />
        <Image style={styles.wrapperImageAR} source={ICArrow} />
        <Image style={styles.wrapperImage2} source={ICTranfer3} />
      </View>
      <View style={styles.wrapperInLineHeader}>
        <Text style={styles.StylteText}>Chọn Gói rác</Text>
        <Text></Text>
        <Text style={styles.StylteText}>Xác nhận vận chuyển</Text>
        <Text></Text>
        <Text style={styles.StylteText2}>Vận chuyển thành công</Text>
      </View>

      <View style={styles.wrapperMain}>
        <TouchableOpacity
          style={styles.wrapperInMain}
          onPress={() => {
            HandleMap(route.params.X, route.params.Y);
          }}>
          <Image style={styles.wrapperImage} source={icMap} />
          <Text style={styles.styleTextMap}>Tìm kiếm trên google Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperInMain}>
          <Image style={styles.wrapperImage} source={icCall} />
          <Text
            style={styles.styleTextMap}
            onPress={() => {
              Linking.openURL(`tel:${route.params.Phone}`);
            }}>
            Gọi điện đến khách hàng
          </Text>
        </TouchableOpacity>

        <View style={styles.wrapperInMain}>
          <Image style={styles.wrapperImage} source={icUser} />
          <Text style={styles.styleTextMap}>
            Tên khách hàng: {route.params.Name}
          </Text>
        </View>

        <View style={styles.wrapperInMain}>
          <Image style={styles.wrapperImage} source={icAddress} />
          <Text style={styles.styleTextMap}>
            Địa chỉ: {route.params.Address}
          </Text>
        </View>
      </View>
      <View style={styles.WrapperBtn}>
        <TouchableOpacity
          style={styles.wrapperTouch}
          onPress={handleSuccessRecy}>
          <Text style={styles.StylteTextBtn}>
            Xác nhận vận chuyển thành công
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
    height: 40,
    width: 40,
  },
  wrapperImage: {
    height: 25,
    width: 25,
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
    color: 'black',
  },
  StylteText2: {
    width: '20%',
    fontSize: 10,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#009966',
  },

  wrapperMain: {
    marginHorizontal: '2%',
    marginTop: '10%',
    height: '53%',
  },
  StylteTextMain: {
    width: '99%',
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginBottom: '1.5%',
  },
  styleTextMap: {
    width: '85%',
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  StylteTextMain2: {
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  StylteTextMain3: {
    width: '100%',
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop: '1%',
  },
  wrapperInMain: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
    marginLeft: '2%',
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
export default connect(mapStateToProps)(HandleSucess);
