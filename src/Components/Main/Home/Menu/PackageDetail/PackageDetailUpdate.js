import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {Dimensions} from 'react-native';

import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';
const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;
const PackageDetailUpdate = (props) => {
  const {t, i18n} = useTranslation();
  const route = useRoute();
  const navigation = useNavigation();
  const handleX = (ID) => {
    console.log(ID);
    props.dispatch({
      type: 'deleteCart',
      ID: ID,
    });
  };
  useEffect(() => {
    console.log(route.params.e);
  });
  return (
    <View style={styles.wrapperMain}>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>Chi tiết gói hàng</Text>
      </View>
      <ScrollView style={styles.wrapperContent}>
        {route.params.e.Cart.map((e) => (
          <View style={styles.wrapperMainCart}>
            <View style={styles.wrapperinLine}>
              <Image source={e.Image} style={styles.wrapperImage} />
              <View style={styles.wrapperText}>
                <View style={styles.wrapperinLine2}>
                  <Text style={styles.stylesText}>
                    Tên rác tái chế: {e.Name}
                  </Text>
                </View>
                <Text style={styles.stylesText}>
                  Số Lượng: {e.amount}
                  {e.Unit.slice(2, 10)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.wrapperBtn}>
        <Text style={styles.TextSubmit}>Xác nhận đã bán</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  wrapperHeader: {
    height: (windowHeight * 1) / 10,
    width: '100%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperContent: {
    height: (windowHeight * 7) / 10,
  },
  textStyleHeader: {
    fontSize: 30,
    fontFamily: 'monospace',
    color: 'white',
    fontWeight: 'bold',
  },
  TextBtnX: {
    color: '#009966',
    fontSize: 13,
    fontFamily: 'monospace',

    fontWeight: 'bold',
  },
  wrapperBtn: {
    marginTop: '10%',
    height: (windowHeight * 0.7) / 10,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    marginBottom: (windowHeight * 0.2) / 10,
  },
  wrapperMain: {
    width: '100%',
    height: '100%',
  },
  wrapperMainCart: {
    // height: (windowHeight * 0.9) / 10,
    width: '90%',
    marginLeft: '5%',
    borderBottomWidth: 1,
    marginTop: '3%',
    paddingBottom: '4%',
    // justifyContent: 'center',
  },
  wrapperImage: {
    marginTop: '5%',
    height: 35,
    width: 35,
  },
  wrapperinLine: {
    flexDirection: 'row',
    marginLeft: '2%',
    alignItems: 'center',
  },
  wrapperinLine2: {
    flexDirection: 'row',
    // marginLeft: '2%',
    // alignItems: 'center',
  },
  wrapperText: {
    marginLeft: '6%',
  },
  stylesText: {
    width: windowWidth / 1.4,
    fontSize: 13,
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
export default connect(mapStateToProps)(PackageDetailUpdate);
