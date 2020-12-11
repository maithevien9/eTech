import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NewRecyclablesAPI from '../../../../RestAPI/Recyclables/new-recyclables-api';
import CheckRycuclables from '../../../../RestAPI/Recyclables/check-recyclables-api';
import {connect} from 'react-redux';
import Handling from './HandleRecyclables/Handling';
import Handled from './HandleRecyclables/Handled';
const Collect = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();
  const [dataHandleCheckRecy, setDataHandleCheckRecy] = useState(true);

  useEffect(() => {
    async function CheckRecyle() {
      // CheckRycuclables(props.dataLogin.token)
      //   .then((json) => {
      //     var data = JSON.parse(JSON.stringify(json));
      //     console.log(data);
      //     if (data.dataString === 'Handling') {
      //       setDataHandleCheckRecy(false);
      //     } else {
      //       setDataHandleCheckRecy(true);
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error + 'fail');
      //   });
    }
    CheckRecyle();
  });
  const Hanlelevel1 = () => {
    Alert.alert(
      'Thông báo',
      'Bạn có chắn chắn với Mức 1 không ?',
      [
        {
          text: 'Hủy',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Đồng ý', onPress: () => navigation.goBack()},
      ],
      {cancelable: false},
    );
  };
  const Handle = dataHandleCheckRecy ? <Handled /> : <Handling />;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.wrapperTextHeader}>
        <Text style={styles.Textheader}>THU GOM RÁC TÁI CHẾ</Text>
      </Text>
      <View style={styles.wrapperBtn}>
        <Handled />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },

  wrapperTextHeader: {
    marginTop: '5%',
  },
  Textheader: {
    fontSize: 25,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  wrapperBtn: {
    width: '100%',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
  };
}
export default connect(mapStateToProps)(Collect);
