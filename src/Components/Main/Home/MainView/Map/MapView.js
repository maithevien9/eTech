import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ICTranfer2 from '../../../../../Images/Icons/open-box.png';
import ICTranfer1 from '../../../../../Images/Icons/zoom2.png';
import ICTranfer3 from '../../../../../Images/Icons/checked.png';
import ICArrow from '../../../../../Images/Icons/right-arrow.png';
const MapViewAll = (props) => {
  const navigation = useNavigation();
  const HandleRecy = (e) => {
    navigation.navigate('HandleRecy', {
      e,
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperInLineHeaderImage}>
        <Image style={styles.wrapperImage2} source={ICTranfer1} />
        <Image style={styles.wrapperImageAR} source={ICArrow} />
        <Image style={styles.wrapperImage} source={ICTranfer2} />
        <Image style={styles.wrapperImageAR} source={ICArrow} />
        <Image style={styles.wrapperImage} source={ICTranfer3} />
      </View>
      <View style={styles.wrapperInLineHeader}>
        <Text style={styles.StylteText2}>Chọn Gói rác</Text>
        <Text></Text>
        <Text style={styles.StylteText}>Xác nhận vận chuyển</Text>
        <Text></Text>
        <Text style={styles.StylteText}>Vận chuyển thành công</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 16.054407,
          longitude: 108.202164,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}>
        {props.dataLocolRecy.map((e) => (
          <Marker
            key={e.ID}
            coordinate={{
              latitude: e.X,
              longitude: e.Y,
            }}
            title={e.Name}
            description={e.Address}
          />
        ))}
        {/* <Marker
          coordinate={{
            latitude: props.InforUser[0].X,
            longitude: props.InforUser[0].Y,
          }}
        /> */}
      </MapView>
      {props.dataLocolRecy.map((e) => (
        <TouchableOpacity
          style={styles.wrapperTouch}
          onPress={() => {
            HandleRecy(e);
          }}>
          <View style={styles.wrapperInLine}>
            <Text style={styles.StylteTextMain}>Tên Khách Hàng: </Text>
            <Text style={styles.StylteText2Main}>{e.Name}</Text>
          </View>
          <View style={styles.wrapperInLine}>
            <Text style={styles.StylteTextMain}>Địa chỉ: </Text>
            <Text style={styles.StylteText2Main}>{e.Address}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperInLineHeader: {
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '2%',
    height: '5%',
    marginBottom: '1.5%',
  },
  wrapperInLineHeaderImage: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '3%',
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
  map: {
    marginTop: '1%',
    width: '99%',
    height: 420,
  },

  wrapperTouch: {
    marginTop: '1%',
    height: '12%',
    width: '99%',
    borderWidth: 1,
    paddingLeft: '2%',
    paddingTop: '2%',
  },
  wrapperInLine: {
    flexDirection: 'row',
  },
  StylteTextMain: {
    fontSize: 13,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginBottom: 7,
  },
  StylteText2Main: {
    fontSize: 13,
    fontFamily: 'monospace',
    fontWeight: 'bold',

    width: '80%',
  },
});

function mapStateToProps(state) {
  return {
    dataLocolRecy: state.dataLocolRecy,
  };
}
export default connect(mapStateToProps)(MapViewAll);
