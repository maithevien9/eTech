import icMetal1 from '../../Images/Icons/paper1.png';
import icMetal2 from '../../Images/Icons/paper2.png';
import {Alert} from 'react-native';
var Cart = [
  {
    ID: 5,
    Name: 'Carton/Bìa Cứng',
    amount: 2,
    Score: 3000,
    Unit: '1/kg',
    Image: icMetal1,
  },
  {
    ID: 6,
    Name: 'Giấy vở văn phòng',
    amount: 2,
    Score: 3000,
    Unit: '1/kg',
    Image: icMetal2,
  },
];
const CartReducer = (state = Cart, action) => {
  if (action.type === 'setCart') return action.data;
  if (action.type === 'addCart') {
    var ID = action.ID;
    var temp = 0;
    state.filter((e) => {
      if (ID === e.ID) {
        temp = temp + 1;
      }
    });
    if (temp == 0) {
      Alert.alert(
        'Nofity',
        'Thành Công',
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
      return [
        {
          ID: action.ID,
          Name: action.Name,
          amount: action.amount,
          Score: action.Score,
          Unit: action.Unit,
          Image: action.Image,
        },
      ].concat(state);
    } else {
      Alert.alert(
        'Nofity',
        'Bạn đã thêm rồi, vui lòng kiểm tra lại',
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
  }
  if (action.type === 'deleteCart') {
    return state.filter((e) => {
      if (e.ID !== action.ID) {
        return e;
      }
    });
  }
  return state;
};
export default CartReducer;
