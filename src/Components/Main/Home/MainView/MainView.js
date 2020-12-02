import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import icSchedule from '../../../../Images/Icons/Schedule.png';
import {useNavigation} from '@react-navigation/native';
import GetLocalRecy from '../../../../../src/RestAPI/Carrier/get-local-Recy-api';
import {connect} from 'react-redux';
const MainView = (props) => {
  const navigation = useNavigation();
  const HandleGetLocalRecy = (TimeLine, Time) => {
    var YY = TimeLine.slice(6, 10);
    var MM = TimeLine.slice(3, 5);
    var DD = TimeLine.slice(0, 2);

    var dataDay = YY + '-' + MM + '-' + DD + ' ' + Time;

    //console.log(dataDay);
    GetLocalRecy(dataDay)
      .then((json) => {
        var data = JSON.parse(JSON.stringify(json));
        // console.log(data);
        if (data.dataString === 'THANH_CONG') {
          props.dispatch({
            type: 'setdataLocolRecy',
            data: data.data,
          });
          navigation.navigate('MapView');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.wrapperText}>
          <Text style={styles.StylteText}>Ngày: 06/12/2020</Text>
        </View>
        <View style={styles.wrapperTime}>
          <View style={styles.wrapperRow}>
            <TouchableOpacity
              style={styles.wrapperTouch}
              onPress={() => {
                HandleGetLocalRecy('06/12/2020', '11:30');
              }}>
              <Image source={icSchedule} style={styles.wrapperImage} />
              <Text style={styles.StylteTextTime}>11:30 - 12:30</Text>
            </TouchableOpacity>
            <View style={{width: 10}} />
            <TouchableOpacity style={styles.wrapperTouch}>
              <Image source={icSchedule} style={styles.wrapperImage} />
              <Text style={styles.StylteTextTime}>12:30 - 13:30</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperRow}>
            <TouchableOpacity style={styles.wrapperTouch}>
              <Image source={icSchedule} style={styles.wrapperImage} />
              <Text style={styles.StylteTextTime}>16:30 - 17:30</Text>
            </TouchableOpacity>
            <View style={{width: 10}} />
            <TouchableOpacity style={styles.wrapperTouch}>
              <Image source={icSchedule} style={styles.wrapperImage} />
              <Text style={styles.StylteTextTime}>17:30 - 18:30</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: '2%',
    height: '91%',
    width: '98%',

    marginLeft: '1%',
    // borderWidth: 0.9,
  },
  wrapperText: {
    marginTop: '2%',
    marginLeft: '3%',
    marginBottom: '20%',
  },
  wrapperImage: {height: 40, width: 40},
  StylteText: {
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  StylteTextTime: {
    marginTop: '10%',
    fontSize: 18,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: 'black',
  },
  wrapperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperTouch: {
    height: 170,
    width: '45%',
    borderWidth: 2,
    borderColor: '#009966',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 15,
  },
  wrapperTime: {
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    dataLocolRecy: state.dataLocolRecyReducer,
  };
}
export default connect(mapStateToProps)(MainView);
