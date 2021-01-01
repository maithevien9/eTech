import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import icBack from '../../../Images/Icons/back.png';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {connect} from 'react-redux';
import ChangInforUser from '../../../RestAPI/User/change-infor-user-api';
const ContactUpdate = (props) => {
  const [Name, setName] = useState('');
  const [Address, setAddress] = useState('/');

  const [Phone, setPhone] = useState('');

  const navigation = useNavigation();
  const [latitude, setlatitude] = useState(21.0277644);
  const [longitude, setlongitude] = useState(105.8341598);
  const [ZoomX, setZoomX] = useState(0.5);
  const [ZoomY, setZoomY] = useState(0.5);
  const [height, setheight] = useState(55);
  const [DataCheckMap, setDataCheckMap] = useState(false);
  const handleBack = () => {
    navigation.goBack();
  };
  const HandleClick = () => {
    setheight(300);
  };
  const handleUpdate = () => {
    // if (latitude === 21.0277644 || longitude === 105.8341598) {
    //   Alert.alert(
    //     'Nofity',
    //     'Vui lòng nhập địa chỉ',
    //     [{text: 'OK', onPress: () => console.log('?')}],
    //     {cancelable: false},
    //   );
    // } else {
    //   ChangInforUser(
    //     props.dataLogin.token,
    //     Name,
    //     Address,
    //     Phone,
    //     latitude,
    //     longitude,
    //   )
    //     .then((json) => {
    //       var data = JSON.parse(JSON.stringify(json));
    //       console.log(data);
    //       if (data.dataString === 'THANH_CONG') {
    //         props.dispatch({
    //           type: 'setInforUser',
    //           data: [
    //             {
    //               ID: 8,
    //               Name: Name,
    //               Address: Address,
    //               X: latitude,
    //               Y: longitude,
    //               Phone: Phone,
    //               IDdecentralization: 1,
    //             },
    //           ],
    //         });
    //         props.dispatch({
    //           type: 'setdataCheckLocal',
    //           data: true,
    //         });
    //         Alert.alert(
    //           'Nofity',
    //           'Thanh Cong',
    //           [
    //             {
    //               text: 'Cancel',
    //               onPress: () => navigation.goBack(),
    //               style: 'cancel',
    //             },
    //             {text: 'OK', onPress: () => navigation.goBack()},
    //           ],
    //           {cancelable: false},
    //         );
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error + 'fail');
    //     });
    // }
    navigation.goBack();
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>CẬP NHẬP THÔNG TIN</Text>
      </View>
      <View style={styles.wrapperLine} />

      <View style={styles.wrapperMapFull}>
        {/* <View style={styles.wrapperMap} /> */}

        {/* <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: ZoomX,
            longitudeDelta: ZoomY,
          }}>
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            // title={'Vien'}
            // description={Address}
          />
        </MapView> */}
        {DataCheckMap ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: ZoomX,
              longitudeDelta: ZoomY,
            }}>
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              // title={'Vien'}
              // description={Address}
            />
          </MapView>
        ) : (
          <View style={styles.map2}>
            <Text style={styles.TextMain}>Vui lòng cập nhập địa chỉ</Text>
          </View>
        )}
      </View>
      <View
        style={{
          height: '25%',
          width: '100%',
          paddingHorizontal: 10,
          flexWrap: 'wrap',
        }}>
        <GooglePlacesAutocomplete
          placeholder="Nhập địa chỉ"
          minLength={2}
          autoFocus={false}
          returnKeyType={'default'}
          fetchDetails={true}
          styles={{
            textInputContainer: {
              backgroundColor: 'black',
              marginTop: 6,
              height: 40,
              width: '100%',
            },
            textInput: {
              borderRadius: 0,
              height: 38,
              color: 'black',
              fontSize: 16,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data.description);
            setAddress(data.description);
            setDataCheckMap(true);
            setlatitude(details.geometry.location.lat);
            console.log(latitude);
            setlongitude(details.geometry.location.lng);
            console.log(longitude);
            setZoomX(0.3);
            setZoomY(0.3);
          }}
          query={{
            key: 'AIzaSyAE8jGKDc99bqKIup4jFl_17OtQKoTkG_k',
            language: 'vn',
          }}
          // predefinedPlaces={[homePlace, workPlace]}
        />
      </View>
      <View style={styles.wrapperInput}>
        <TextInput
          onChangeText={(text) => setName(text)}
          value={Name}
          style={styles.textInput}
          placeholder="Tên người dùng"
        />
        <TextInput
          onChangeText={(text) => setPhone(text)}
          value={Phone}
          style={styles.textInput}
          placeholder="Số điện thoại"
        />

        <View style={{alignItems: 'center', marginTop: 10, width: '90%'}}>
          <TouchableOpacity
            style={styles.wapperBtnUpdate}
            onPress={() => {
              handleUpdate();
            }}>
            <Text style={styles.wrapperTextupdate}>Cập nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#F6F6F6'},
  wrapperMain: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  wrapperMain2: {
    height: '100%',
    width: '100%',
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
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
    fontFamily: 'monospace',
    color: 'white',
  },
  wrapperLine: {
    height: 10,
    backgroundColor: '#ffffff',
  },
  textInput: {
    height: 50,
    width: '90%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingLeft: 20,
    marginBottom: 8,
    fontSize: 13,
  },
  wrapperInput: {
    height: 300,
    alignItems: 'center',
    paddingTop: 20,
  },
  wrapperMap: {
    height: 300,
    backgroundColor: '#C0C0C0',
    width: '95%',
  },
  TextMain: {
    fontFamily: 'monospace',

    fontWeight: '500',
    fontSize: 20,
  },
  wrapperMapFull: {
    alignItems: 'center',
  },
  wapperBtnUpdate: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009966',
    borderRadius: 15,
    height: 40,
    width: 300,
    // borderWidth: 0.5,
  },
  map: {width: '95%', height: 255},
  map2: {
    width: '95%',
    height: 255,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperPlaces: {
    height: 55,
    width: '100%',
    paddingHorizontal: 10,
  },
  wrapperTextupdate: {
    fontSize: 20,
    fontFamily: 'monospace',
    color: 'white',
    fontWeight: 'bold',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    InforUser: state.InforUser,
    dataCheckLocal: state.dataCheckLocal,
    ZoomY: state.ZoomY,
    ZoomX: state.ZoomX,
  };
}
export default connect(mapStateToProps)(ContactUpdate);
