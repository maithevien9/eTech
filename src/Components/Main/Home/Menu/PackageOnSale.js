import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import icGift from '.././../../../Images/Icons/cart.png';
import {connect} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const PackageOnSale = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const convertDate = (date) => {
    var ts = new Date(date);
    return ts.toLocaleDateString();
  };
  const convertDate2 = (date) => {
    var ts = new Date(date);
    return ts.toLocaleTimeString();
  };
  const hanldePackageDetail = (e) => {
    navigation.navigate('PackageDetailUpdate', {
      e,
    });
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>Gói Hàng Đang Bán</Text>
      </View>
      <ScrollView style={styles.wrapperMain}>
        {props.CartHistory.map((e) => (
          <View style={styles.wrapperForm}>
            <Image source={icGift} style={styles.wrapperImage} />
            <View style={{marginLeft: '5%'}}>
              <View style={styles.wrapperRowFull}>
                <View style={styles.wrapperRowGift}>
                  <Text style={styles.StyleText}>Trạng Thái: </Text>
                  <View>
                    <Text style={styles.StyleText}>Đang bán</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.wrapperRowScore}
                  onPress={() => hanldePackageDetail(e)}>
                  <Text style={styles.StyleText2}>Chi tiết </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Mức Giá: </Text>
                <Text style={styles.StyleText}>{e.Price}</Text>
              </View>
              <View style={styles.wrapperRow}>
                <Text style={styles.StyleText}>Thời gian tạo: </Text>
                <Text style={styles.StyleText}>{e.CreateAtTime}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperHeader: {
    height: 80,
    width: '100%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyleHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'white',
  },
  wrapperMain: {
    marginLeft: '3%',
    marginTop: '3%',
  },
  wrapperForm: {
    width: '95%',
    height: windowHeight / 8,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingLeft: '3%',
    alignItems: 'center',
    marginBottom: 10,
  },
  wrapperImage: {
    height: 40,
    width: 40,
    marginRight: '3%',
  },
  wrapperRow: {
    flexDirection: 'row',
  },
  wrapperRowFull: {
    flexDirection: 'row',
  },
  wrapperRowGift: {
    flexDirection: 'row',
    width: '60%',
  },
  wrapperRowScore: {
    height: windowHeight / 38,
    flexDirection: 'row',
    width: '35%',
  },
  StyleText: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'black',
  },
  StyleText2: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'red',
    fontWeight: 'bold',
  },
});

function mapStateToProps(state) {
  return {
    CartHistory: state.CartHistory,
    dataLogin: state.dataLogin,
    historyGift: state.historyGift,
  };
}
export default connect(mapStateToProps)(PackageOnSale);
