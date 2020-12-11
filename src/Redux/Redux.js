import {createStore, combineReducers} from 'redux';
import icMetal1 from '../Images/Icons/paper1.png';
import icMetal2 from '../Images/Icons/plastic2.png';
import icMetal3 from '../Images/Icons/plastic3.png';
var dataLogin = {};
var Scores = 0;
var dataNotify = [];
var historyGift = [];
var historyScore = [];
var HistoryRecyclables = [];
var InforUser = {};
var dataCheckLocal = false;
var ZoomX = 15;
var ZoomY = 15;
var Cart = [
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
];

const CartReducer = (state = Cart, action) => {
  if (action.type === 'setCart') return action.data;
  if (action.type === 'addCart') {
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
const ZoomXRedycer = (state = ZoomX, action) => {
  if (action.type === 'setZoomX') return action.data;
  return state;
};
const ZoomYRedycer = (state = ZoomY, action) => {
  if (action.type === 'setZoomY') return action.data;
  return state;
};
const HistoryRecyclablesReducer = (state = HistoryRecyclables, action) => {
  if (action.type === 'HistoryRecyclables') return action.data;
  return state;
};
const dataLoginReducer = (state = dataLogin, action) => {
  if (action.type === 'setDataLogin') return action.data;
  return state;
};
const historyScoreReducer = (state = historyScore, action) => {
  if (action.type === 'historyScore') return action.data;
  return state;
};
const historyGiftReducer = (state = historyGift, action) => {
  if (action.type === 'historyGift') return action.data;
  return state;
};
const InforUserReducer = (state = InforUser, action) => {
  if (action.type === 'setInforUser') return action.data;
  return state;
};
const dataCheckLocalReducer = (state = dataCheckLocal, action) => {
  if (action.type === 'setdataCheckLocal') return action.data;
  return state;
};
const dataNotifyReducer = (state = dataNotify, action) => {
  if (action.type === 'setdataNotify') return action.data;
  if (action.type === 'addNotify') {
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    var hour = date_ob.getHours();
    var min = date_ob.getMinutes();
    var sec = date_ob.getSeconds();

    // console.log(
    //   year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec,
    // );
    var dateTime =
      year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;
    console.log(dateTime);
    return [
      {
        ID: Math.random().toString(36).substr(2, 9),
        Name: action.Name,
        Detail: '',
        IDUser: action.IDUser,
        CreateAtTime: dateTime,
      },
    ].concat(state);
  }
  return state;
};
const ScoresReducer = (state = Scores, action) => {
  if (action.type === 'setScore') {
    return action.data;
  }
  if (action.type === 'MinusPoints') {
    return state - action.data;
  }
  return state;
};

// const arrUserReducer = (state = arrUser, action) => {
//   if (action.type === 'SetData') return action.data;
//   return state;
// };
const reducer = combineReducers({
  dataLogin: dataLoginReducer,
  Scores: ScoresReducer,
  dataNotify: dataNotifyReducer,
  historyGift: historyGiftReducer,
  historyScore: historyScoreReducer,
  HistoryRecyclables: HistoryRecyclablesReducer,
  InforUser: InforUserReducer,
  dataCheckLocal: dataCheckLocalReducer,
  ZoomX: ZoomXRedycer,
  ZoomY: ZoomYRedycer,
  Cart: CartReducer,
});
const store = createStore(reducer);

export default store;
