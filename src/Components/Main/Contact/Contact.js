import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import phoneIcon from '../../../Images/Icons/phone.png';
import mailIcon from '../../../Images/Icons/mail.png';
import messageIcon from '../../../Images/Icons/message.png';
import locationIcon from '../../../Images/Icons/location.png';

// import MapView, {Polyline} from 'react-native-maps';
import MapView, {Marker} from 'react-native-maps';

import {useNavigation} from '@react-navigation/native';
// import Geolocation from '@react-native-community/geolocation';
// import {Platform, PermissionsAndroid} from 'react-native';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {YellowBox} from 'react-native';
import GetInforUser from '../../../RestAPI/User/get-infor-user';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
// import LocationView from 'react-native-location-view';
const {width} = Dimensions.get('window');

// YellowBox.ignoreWarnings([
//   'VirtualizedLists should never be nested', // TODO: Remove when fixed
// ]);

const Contact = (props) => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const {
    mapContainer,
    wrapper,
    infoContainer,
    rowInfoContainer,
    imageStyle,
    infoText,
    wrapperBtnlc,
    infoText2,
  } = styles;
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    error: null,
  });
  const [local, setlocal] = useState({});
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  useEffect(() => {
    // Geolocation.getCurrentPosition(
    //   (position) => {
    //     //const location = JSON.stringify(position);
    //     // setlocal(JSON.parse(location));
    //     console.log(position);
    //     // setRegion({
    //     //   latitude: JSON.parse(location).coords.latitude,
    //     //   longitude: JSON.parse(location).coords.longitude,
    //     //   error: null,
    //     // });
    //     setlatitude(position.coords.latitude);
    //     setlongitude(position.coords.longitude);
    //   },
    //   (e) => {
    //     console.log(e);
    //   },
    //   {timeout: 20000},
    // );
    // if (props.InforUser[0].X) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.setAddressText('Some Text');
  // }, []);

  const handleUpdateUser = () => {
    navigation.navigate('ContactUpdate');
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>{t('Contact')}</Text>
      </View>
      <View style={mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 16.04736,
            longitude: 108.1725,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            coordinate={{
              latitude: 16.04736,
              longitude: 108.1725,
            }}
          />
        </MapView>
      </View>
      <View style={infoContainer}>
        <View style={rowInfoContainer}>
          <Image source={mailIcon} style={imageStyle} />
          <Text style={infoText}>Mai Thế Viễn</Text>
        </View>
        <View style={rowInfoContainer}>
          <Image source={locationIcon} style={imageStyle} />
          <View style={{width: '75%'}}>
            <Text style={infoText}>64 Nhơn Hòa 5, Cẩm Lệ, Đà Nẵng</Text>
          </View>
        </View>
        <View style={rowInfoContainer}>
          <Image source={phoneIcon} style={imageStyle} />
          <Text style={infoText}>0869040015</Text>
        </View>

        {/* <View style={[rowInfoContainer, {borderBottomWidth: 0}]}>
          <Image source={messageIcon} style={imageStyle} />
          <Text style={infoText}>{props.InforUser.Address}</Text>
        </View> */}
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity
          style={styles.wapperBtnUpdate}
          onPress={() => {
            handleUpdateUser();
          }}>
          <Text style={styles.wrapperTextupdate}>{t('Update')}</Text>
        </TouchableOpacity>
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
  wrapperBtnlc: {
    height: 28,
    width: '70%',
    backgroundColor: '#009966',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {width: '95%', height: 285},
  mapStyle: {
    width: width - 40,
    height: 230,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 340,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  infoContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    margin: 10,
    marginTop: 0,
    borderRadius: 20,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  rowInfoContainer: {
    height: 60,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderColor: '#F6F6F6',
    width: '95%',
  },
  imageStyle: {
    width: 15,
    height: 15,
  },
  infoText: {
    fontFamily: 'monospace',
    color: '#AE005E',
    fontWeight: '500',
    fontSize: 13,
  },
  infoText2: {
    fontFamily: 'monospace',
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  textStyleHeader: {
    fontSize: 28,
    fontFamily: 'monospace',
    color: 'white',
    fontWeight: 'bold',
  },
  wapperBtnUpdate: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009966',
    borderRadius: 10,
    height: 50,
    width: '92%',
  },
  TextMain: {
    fontFamily: 'monospace',

    fontWeight: '500',
    fontSize: 20,
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
  };
}
export default connect(mapStateToProps)(Contact);
