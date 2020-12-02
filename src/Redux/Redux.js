import {createStore, combineReducers} from 'redux';

var dataLogin = {};
var dataLocolRecy = [];
const dataLoginReducer = (state = dataLogin, action) => {
  if (action.type === 'setDataLogin') return action.data;
  return state;
};
const dataLocolRecyReducer = (state = dataLocolRecy, action) => {
  if (action.type === 'setdataLocolRecy') {
    // console.log('./' + JSON.stringify(action.data));
    return action.data;
  }
  return state;
};

const reducer = combineReducers({
  dataLogin: dataLoginReducer,
  dataLocolRecy: dataLocolRecyReducer,
});
const store = createStore(reducer);

export default store;
