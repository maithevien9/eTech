import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {connect} from 'react-redux';
const MapViewAll = (props) => {
  const HandleRecy = () => {
    console.log('hihi');
  };

  return (
    <View style={styles.wrapper}>
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
        <TouchableOpacity style={styles.wrapperTouch} onPress={HandleRecy}>
          <View style={styles.wrapperInLine}>
            <Text style={styles.StylteText}>Tên Khách Hàng: </Text>
            <Text style={styles.StylteText2}>{e.Name}</Text>
          </View>
          <View style={styles.wrapperInLine}>
            <Text style={styles.StylteText}>Địa chỉ: </Text>
            <Text style={styles.StylteText2}>{e.Address}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    marginTop: '1%',
    width: '99%',
    height: 420,
  },
  wrapper: {alignItems: 'center'},
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
  StylteText: {
    fontSize: 13,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginBottom: 7,
  },
  StylteText2: {
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
