import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
const CategoryDetail = (props) => {
  const [amount, setAmount] = React.useState(0);
  const route = useRoute();
  const navigation = useNavigation();
  var ID = route.params.ID;
  var Name = route.params.Name;
  var Score = route.params.Score;

  const HandleCart = () => {
    if (amount) {
      console.log(ID + '/' + Name + '/' + amount + '/' + route.params.Score);
      props.dispatch({
        type: 'addCart',
        ID: ID,
        Name: Name,
        amount: amount,
        Score: route.params.Score,
        Unit: route.params.Unit,
        Image: route.params.Image,
      });

      navigation.navigate('Main');
    } else {
      Alert.alert(
        'Nofity',
        'Vui lòng nhập số lượng',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  };
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.wrapperHeader}>
        <Text style={styles.Textheader}>CHI TIẾT RÁC TÁI CHẾ</Text>
      </View>
      <View style={styles.wrapperMain}>
        <Text style={styles.textMain}>Số lượng</Text>
        <TextInput
          onChangeText={(text) => setAmount(text)}
          value={amount}
          keyboardType="numeric"
          style={styles.textInput}
          placeholder={route.params.Unit}
        />
      </View>
      <View style={styles.wrapperScore}>
        <Text style={styles.textMain}>Điểm đổi:</Text>
        <Text style={styles.textMain}>{amount * route.params.Score}</Text>
      </View>
      <Image
        source={route.params.Image}
        style={{height: 40, width: 40, marginTop: '10%'}}
      />
      <TouchableOpacity style={styles.wrapperBtn} onPress={HandleCart}>
        <Text style={styles.TextSubmit}>Thêm vào Giỏ</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperHeader: {
    marginTop: '5%',
    marginBottom: '20%',

    alignItems: 'center',
  },
  wrapperBtn: {
    marginTop: '100%',
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
    borderBottomWidth: 1,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 14,
  },
  textMain: {
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginHorizontal: '1%',
  },
  wrapperMain: {
    marginHorizontal: '5%',
  },
  wrapperScore: {
    flexDirection: 'row',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
  };
}
export default connect(mapStateToProps)(CategoryDetail);
