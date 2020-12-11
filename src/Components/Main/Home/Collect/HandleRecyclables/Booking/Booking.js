import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import NewRecyclablesAPI from '../../../../../../RestAPI/Recyclables/new-recyclables-api';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CreateNotifyAPI from '../../../../../../RestAPI/Notify/create-notify-api';
const Booking = (props) => {
  const navigation = useNavigation();
  // var now = new Date();
  // var next1days = new Date(now.setDate(now.getDate() + 1));
  // var Day1 = next1days.toLocaleDateString();
  // var MM = Day1.slice(0, 2);
  // var DD = Day1.slice(3, 5);
  // var YY = Day1.slice(6, 8);
  // var value1 = DD + '/' + MM + '/20' + YY;
  // var next2days = new Date(now.setDate(now.getDate() + 1));
  // var Day2 = next2days.toLocaleDateString();
  // var MM = Day2.slice(0, 2);
  // var DD = Day2.slice(3, 5);
  // var YY = Day2.slice(6, 8);
  // var value2 = DD + '/' + MM + '/20' + YY;

  // var next3days = new Date(now.setDate(now.getDate() + 1));
  // var Day3 = next3days.toLocaleDateString();

  // var MM = Day3.slice(0, 2);
  // var DD = Day3.slice(3, 5);
  // var YY = Day3.slice(6, 8);
  // var value3 = DD + '/' + MM + '/20' + YY;

  // var next4days = new Date(now.setDate(now.getDate() + 1));
  // var Day4 = next4days.toLocaleDateString();

  // var MM = Day4.slice(0, 2);
  // var DD = Day4.slice(3, 5);
  // var YY = Day4.slice(6, 8);
  // var value4 = DD + '/' + MM + '/20' + YY;

  // var next5days = new Date(now.setDate(now.getDate() + 1));
  // var Day5 = next5days.toLocaleDateString();

  // var MM = Day5.slice(0, 2);
  // var DD = Day5.slice(3, 5);
  // var YY = Day5.slice(6, 8);
  // var value5 = DD + '/' + MM + '/20' + YY;

  // var next6days = new Date(now.setDate(now.getDate() + 1));
  // var Day6 = next6days.toLocaleDateString();

  // var MM = Day6.slice(0, 2);
  // var DD = Day6.slice(3, 5);
  // var YY = Day6.slice(6, 8);
  // var value6 = DD + '/' + MM + '/20' + YY;

  // var next7days = new Date(now.setDate(now.getDate() + 1));
  // var Day7 = next7days.toLocaleDateString();

  // var MM = Day7.slice(0, 2);
  // var DD = Day7.slice(3, 5);
  // var YY = Day7.slice(6, 8);
  // var value7 = DD + '/' + MM + '/20' + YY;

  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  var hour = date_ob.getHours();
  var min = date_ob.getMinutes();
  var sec = date_ob.getSeconds();

  var dateTime =
    year + '/' + month + '/' + date + ' ' + hour + ':' + min + ':' + sec;

  var dateObj = new Date();
  var weekday = dateObj.toLocaleString('default', {weekday: 'long'});

  var InDay = weekday.slice(0, 3);
  // console.log(InDay);
  if (InDay === 'Mon' || InDay === 'Tue' || InDay === 'Sun') {
    var d = dateTime.replace(/(^\d{4})(\d{2})(\d{2}$)/, '$1/$2/$3');
    d = new Date(d);
    // console.log(d.getDay());
    d.setDate(d.getDate() - d.getDay());
    var nexts = new Date(d.setDate(d.getDate() + 7 - 4));
    //console.log(nexts);
    var Day1 = nexts.toLocaleDateString();
    var MM = Day1.slice(0, 2);
    var DD = Day1.slice(3, 5);
    var YY = Day1.slice(6, 8);
    Day1 = 'Thứ Tư:   ' + DD + '/' + MM + '/20' + YY;
    var next2days = new Date(d.setDate(d.getDate() + 4));
    var Day2 = next2days.toLocaleDateString();

    var MM = Day2.slice(0, 2);
    var DD = Day2.slice(3, 5);
    var YY = Day2.slice(6, 8);
    var Day2 = 'Chủ Nhật: ' + DD + '/' + MM + '/20' + YY;
    var next3days = new Date(d.setDate(d.getDate() + 3));
    var Day3 = next3days.toLocaleDateString();

    var MM = Day3.slice(0, 2);
    var DD = Day3.slice(3, 5);
    var YY = Day3.slice(6, 8);
    var Day3 = 'Thứ Tư:   ' + DD + '/' + MM + '/20' + YY;
    var next4days = new Date(d.setDate(d.getDate() + 4));
    var Day4 = next4days.toLocaleDateString();

    var MM = Day4.slice(0, 2);
    var DD = Day4.slice(3, 5);
    var YY = Day4.slice(6, 8);
    var Day4 = 'Chủ Nhật: ' + DD + '/' + MM + '/20' + YY;
    //console.log(Day1 + '.');
  } else {
    var d = dateTime.replace(/(^\d{4})(\d{2})(\d{2}$)/, '$1/$2/$3');
    d = new Date(d);
    // console.log(d.getDay());
    d.setDate(d.getDate() - d.getDay());
    var nexts = new Date(d.setDate(d.getDate() + 7));
    // console.log(nexts);
    var Day1 = nexts.toLocaleDateString();
    var MM = Day1.slice(0, 2);
    var DD = Day1.slice(3, 5);
    var YY = Day1.slice(6, 8);
    Day1 = 'Chủ Nhật: ' + DD + '/' + MM + '/20' + YY;
    var next2days = new Date(d.setDate(d.getDate() + 3));
    var Day2 = next2days.toLocaleDateString();

    var MM = Day2.slice(0, 2);
    var DD = Day2.slice(3, 5);
    var YY = Day2.slice(6, 8);
    var Day2 = 'Thứ Tư:   ' + DD + '/' + MM + '/20' + YY;
    var next3days = new Date(d.setDate(d.getDate() + 4));
    var Day3 = next3days.toLocaleDateString();

    var MM = Day3.slice(0, 2);
    var DD = Day3.slice(3, 5);
    var YY = Day3.slice(6, 8);
    var Day3 = 'Chủ Nhật: ' + DD + '/' + MM + '/20' + YY;
    var next4days = new Date(d.setDate(d.getDate() + 3));
    var Day4 = next4days.toLocaleDateString();

    var MM = Day4.slice(0, 2);
    var DD = Day4.slice(3, 5);
    var YY = Day4.slice(6, 8);
    var Day4 = 'Thứ Tư:   ' + DD + '/' + MM + '/20' + YY;
    // console.log(Day1 + '.');
  }

  // const [dates, setDate] = useState([
  //   {ID: 1, day: value1},
  //   {ID: 2, day: value2},
  //   {ID: 3, day: value3},
  //   {ID: 4, day: value4},
  //   {ID: 5, day: value5},
  //   {ID: 6, day: value6},
  //   {ID: 7, day: value7},
  // ]);
  const [dates, setDate] = useState([
    {ID: 1, day: Day1},
    {ID: 2, day: Day2},
    {ID: 3, day: Day3},
    {ID: 4, day: Day4},
  ]);

  const HandleRecy = (CreateAtTime) => {
    var YY = CreateAtTime.slice(16, 20);
    var MM = CreateAtTime.slice(13, 15);
    var DD = CreateAtTime.slice(10, 12);

    var time = CreateAtTime.slice(21, 33);
    var dataDay = YY + '/' + MM + '/' + DD + ' ' + time;

    console.log(dataDay);
    Alert.alert(
      'Nofity',
      'THÀNH CÔNG',
      [
        {
          text: 'OK',
          onPress: () => navigation.replace('Main'),
        },
      ],
      {cancelable: false},
    );
    //console.log(props.dataLogin.token + '/' + dataDay + '/' + props.Cart);
    // NewRecyclablesAPI(props.dataLogin.token, dataDay, props.Cart)
    //   .then((json) => {
    //     var data = JSON.parse(JSON.stringify(json));
    //     console.log(data);
    //     if (data.dataString === 'THANH_CONG') {
    //       CreateNotifyAPI(
    //         'Đang chờ vận chuyển Gói Rác Tái Chế 1',
    //         '',
    //         props.dataLogin.token,
    //       )
    //         .then((json) => {
    //           var data = JSON.parse(JSON.stringify(json));
    //           if (data.dataString === 'THANH_CONG') {
    //             Alert.alert(
    //               'Nofity',
    //               'THÀNH CÔNG',
    //               [
    //                 {
    //                   text: 'OK',
    //                   onPress: () => navigation.replace('Main'),
    //                 },
    //               ],
    //               {cancelable: false},
    //             );
    //           }
    //         })
    //         .catch((error) => {
    //           console.error(error + 'fail');
    //         });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error + 'fail');
    //   });
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.wrapperTextHeader}>
        <Text style={styles.Textheader}>Chọn Khung Thời Gian</Text>
      </Text>
      <ScrollView style={{marginLeft: '1%'}}>
        {dates.map((e) => (
          <View key={e.ID} style={styles.wrapperTime}>
            <View style={styles.wrapperHeader}>
              <Text style={styles.styleText}>{e.day}</Text>
            </View>
            <View style={styles.wrapperMain2}>
              <TouchableOpacity
                style={styles.wrapperTime2}
                onPress={() => {
                  HandleRecy(e.day + ' 11:30:00');
                }}>
                <Text>11:30</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.wrapperTime2}>
                <Text>12:30</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.wrapperTime2}>
                <Text>17:30</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.wrapperTime2}>
                <Text>18:30</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },

  wrapperTextHeader: {
    marginTop: '5%',
    marginBottom: '6%',
  },
  Textheader: {
    fontSize: 25,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  wrapperBtn: {
    width: '100%',
  },
  wrapperTime: {
    width: '99%',
    marginTop: '3%',
    borderRadius: 20,
    borderWidth: 0.5,
  },
  wrapperHeader: {
    paddingTop: '3%',
    paddingLeft: '5%',
    marginBottom: '5%',
  },
  styleText: {
    fontSize: 13,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  wrapperTime2: {
    backgroundColor: 'white',
    height: 35,
    width: '42%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 10,
    borderColor: '#FEB04A',
  },
  wrapperMain2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: 15,
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
export default connect(mapStateToProps)(Booking);
