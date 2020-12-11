import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Points = () => {
  var arrPoint = [
    {ID: '1', Name: 'Loại 1', Point: '1000'},
    {ID: '2', Name: 'Loại 2', Point: '2000'},
    {ID: '3', Name: 'Túi Nilon', Point: '3000'},
    {ID: '4', Name: 'Bao', Point: '2000'},
    {ID: '5', Name: 'Sách vở', Point: '1500'},
    {ID: '6', Name: 'Kim loại', Point: '5000'},
    {ID: '7', Name: 'Chai', Point: '4000'},
    {ID: '8', Name: 'Lọ', Point: '6000'},
    {ID: '9', Name: 'Loại 1', Point: '1000'},
    {ID: '10', Name: 'Loại 2', Point: '2000'},
    {ID: '11', Name: 'Túi Nilon', Point: '3000'},
    {ID: '12', Name: 'Bao', Point: '2000'},
    {ID: '13', Name: 'Sách vở', Point: '1500'},
    {ID: '14', Name: 'Kim loại', Point: '5000'},
    {ID: '15', Name: 'Chai', Point: '4000'},
    {ID: '16', Name: 'Lọ', Point: '6000'},
    {ID: '17', Name: 'Loại 1', Point: '1000'},
    {ID: '18', Name: 'Loại 2', Point: '2000'},
    {ID: '19', Name: 'Túi Nilon', Point: '3000'},
    {ID: '20', Name: 'Bao', Point: '2000'},
    {ID: '21', Name: 'Sách vở', Point: '1500'},
    {ID: '22', Name: 'Kim loại', Point: '5000'},
    {ID: '23', Name: 'Chai', Point: '4000'},
    {ID: '24', Name: 'Lọ', Point: '6000'},
    {ID: '25', Name: 'Loại 1', Point: '1000'},
    {ID: '26', Name: 'Loại 2', Point: '2000'},
    {ID: '27', Name: 'Túi Nilon', Point: '3000'},
    {ID: '28', Name: 'Bao', Point: '2000'},
    {ID: '29', Name: 'Sách vở', Point: '1500'},
    {ID: '30', Name: 'Kim loại', Point: '5000'},
    {ID: '31', Name: 'Chai', Point: '4000'},
    {ID: '32', Name: 'Lọ', Point: '6000'},
  ];
  return (
    <View style={[styles.wrapperMain]}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.wrapperSTT}>
            <Text style={styles.styleText}>STT</Text>
          </View>
          <View style={styles.wrapperName}>
            <Text style={styles.styleText}>Tên</Text>
          </View>
          <View style={styles.wrapperPoint}>
            <Text style={styles.styleText}>Điểm</Text>
          </View>
        </View>
        {arrPoint.map((e) => (
          <View style={styles.wrapperRow} key={e.ID}>
            <View style={styles.wrapperSTT}>
              <Text style={styles.styleTextRecord}>{e.ID}</Text>
            </View>
            <View style={styles.wrapperName}>
              <Text style={styles.styleTextRecord}>{e.Name}</Text>
            </View>
            <View style={styles.wrapperPoint}>
              <Text style={styles.styleTextRecord}> {e.Point}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: '99%',
    width: '99%',
    borderWidth: 2,
    borderColor: '#009966',
    borderRadius: 10,
    marginTop: '1%',
  },
  wrapperMain: {
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingTop: '1%',
    borderBottomWidth: 2,
    borderBottomColor: '#009966',
    height: 60,
    alignItems: 'center',
  },
  wrapperSTT: {
    width: '30%',
  },
  wrapperName: {
    width: '50%',
  },
  wrapperPoint: {
    width: '20%',
  },
  wrapperRow: {
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingTop: '1%',
    borderBottomWidth: 2,
    borderBottomColor: '#009966',
    marginHorizontal: 10,

    height: 55,
    alignItems: 'center',
  },
  styleText: {
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  styleTextRecord: {
    fontSize: 16,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});
export default Points;
