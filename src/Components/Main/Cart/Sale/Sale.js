import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Sale = (props) => {
  var i = 0;
  const [amount, setAmount] = React.useState(0);
  const [Address, setAddress] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const route = useRoute();
  const navigation = useNavigation();
  const HanldeSale = () => {
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    var hour = date_ob.getHours();
    var min = date_ob.getMinutes();
    var sec = date_ob.getSeconds();

    var dateTime =
      year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;
    props.dispatch({
      type: 'AddCartHistory',
      CreateAtTime: dateTime,
      Price: amount,
      arrayCart: props.Cart,
      Address: Address,
      Phone: Phone,
    });
    props.dispatch({
      type: 'setCart',
      data: [],
    });
    Alert.alert(
      'Nofity',
      'Thành Công',
      [{text: 'OK', onPress: () => navigation.replace('Main')}],
      {cancelable: false},
    );
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.Textheader}>Đăng Bán Gói Hàng</Text>
      </View>
      <View style={styles.wrapperMain}>
        <Text style={styles.textMain}>Mức Giá</Text>
        <TextInput
          onChangeText={(text) => setAmount(text)}
          value={amount}
          keyboardType="numeric"
          style={styles.textInput}
          //   placeholder="data"
        />
      </View>
      <View style={styles.wrapperMain}>
        <Text style={styles.textMain}>Địa chỉ</Text>
        <TextInput
          onChangeText={(text) => setAddress(text)}
          value={Address}
          style={styles.textInput}
          //   placeholder="data"
        />
      </View>
      <View style={styles.wrapperMain}>
        <Text style={styles.textMain}>Số điện thoại</Text>
        <TextInput
          onChangeText={(text) => setPhone(text)}
          value={Phone}
          style={styles.textInput}
          //   placeholder="data"
        />
      </View>
      <Text style={styles.textMain2}>Chi Tiết Gói Hàng</Text>
      <ScrollView style={styles.wrapperMain2}>
        <View style={styles.wrapperDetailCart}>
          <View style={styles.stylesSTT}>
            <Text style={styles.stylesText}>STT</Text>
          </View>
          <View style={styles.stylesNameCart}>
            <Text style={styles.stylesText}>Tên Món Hàng</Text>
          </View>
          <View style={styles.stylesAmount}>
            <Text style={styles.stylesText}>Số Lượng</Text>
          </View>
        </View>
        {props.Cart.map((e) => (
          <View style={styles.wrapperDetailCart2}>
            <View style={styles.stylesSTT}>
              <Text style={styles.stylesText}>{(i = i + 1)}</Text>
            </View>
            <View style={styles.stylesNameCart}>
              <Text style={styles.stylesText}>{e.Name}</Text>
            </View>
            <View style={styles.stylesAmount}>
              <Text style={styles.stylesText}>{e.amount}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.wrapperBtn} onPress={HanldeSale}>
        <Text style={styles.TextSubmit}>Xác Nhận</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperDetailCart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderBottomWidth: 0.7,
    height: windowHeight / 15,
    width: '92%',
    marginHorizontal: '2%',
    alignItems: 'center',
  },
  wrapperDetailCart2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderBottomWidth: 0.7,
    height: windowHeight / 19,
    width: '92%',
    marginHorizontal: '2%',
    alignItems: 'center',
  },
  stylesSTT: {width: '20%'},
  stylesNameCart: {width: '50%'},
  stylesAmount: {width: '20%', alignItems: 'center'},
  stylesText: {fontSize: 12, fontFamily: 'monospace'},
  wrapperHeader: {
    marginTop: '5%',
    marginBottom: '13%',

    alignItems: 'center',
  },
  wrapperBtn: {
    marginLeft: '5%',
    marginTop: '8%',
    height: '7%',
    width: '90%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
  },
  Textheader: {
    fontSize: 25,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  TextSubmit: {
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: 'white',
  },
  textInput: {
    height: 35,
    width: 366,
    borderColor: 'black',
    borderBottomWidth: 0.7,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 14,
  },
  textMain: {
    fontSize: 12,
    fontFamily: 'monospace',
    marginHorizontal: '1%',
  },
  textMain2: {
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginHorizontal: '1%',
    marginLeft: '4%',
  },
  wrapperMain: {
    marginTop: '3%',
    marginLeft: '4%',
  },
  wrapperMain2: {
    marginTop: '3%',
    marginLeft: '4%',
    height: windowHeight / 2.7,
  },
  wrapperScore: {
    flexDirection: 'row',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
    Cart: state.Cart,
  };
}
export default connect(mapStateToProps)(Sale);
