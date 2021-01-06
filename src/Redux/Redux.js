import {createStore, combineReducers} from 'redux';
import icMetal1 from '../Images/Icons/paper1.png';
import icMetal2 from '../Images/Icons/paper2.png';
import {Alert} from 'react-native';
import CartReducer from './Reducer/CartReducer';
import ProductsReducer from './Reducer/ProductReducer';
import dataLoginReducer from './Reducer/dataLoginReducer';
import dataNotifyReducer from './Reducer/NotifyReducer';
import InforUserReducer from './Reducer/InforUserReducer';

var CartHistory = [
  {
    CreateAtTime: '19:00:00 22/22/2020',
    Cart: [
      {
        ID: 6,
        Name: 'Carton/Bìa Cứng',
        amount: 2,
        Score: 3000,
        Unit: '1/kg',
        Image: icMetal1,
      },
      {
        ID: 2,
        Name: 'Gia Vị',
        amount: 2,
        Score: 3000,
        Unit: '1/kg',
        Image: icMetal2,
      },
    ],
    Price: '20000',
    Address: '64 Nhơn Hòa 5, Cẩm Lệ, Đà Nẵng',
    Phone: '0869040015',
  },
];

const CartHistoryReducer = (state = CartHistory, action) => {
  if (action.type === 'AddCartHistory') {
    return [
      {
        CreateAtTime: action.CreateAtTime,
        Cart: action.arrayCart,
        Price: action.Price,
        Address: action.Address,
        Phone: action.Phone,
      },
    ].concat(state);
  }
  return state;
};

const reducer = combineReducers({
  dataLogin: dataLoginReducer,
  dataNotify: dataNotifyReducer,
  InforUser: InforUserReducer,
  Cart: CartReducer,
  CartHistory: CartHistoryReducer,
  Products: ProductsReducer,
});
const store = createStore(reducer);

export default store;
