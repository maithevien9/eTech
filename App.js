import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import store from './src/Redux/Redux';
import {Provider} from 'react-redux';
import Main from './src/Components/Main/Main';
import Loading from './src/Components/Loading/Loading';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authenication from './src/Components/Authenication/Authenication';
import Category from './src/Components/Main/Home/category/category';

import HistoryCart from './src/Components/Main/Home/Menu/HistoryCart';
import HistoryScore from './src/Components/Main/Home/Menu/HistoryScore';
import HistoryRecyclables from './src/Components/Main/Home/Menu/HistoryRecyclable';
import ContactUpdate from './src/Components/Main/Contact/ContactUpdate';

import CategoryDetail from './src/Components/Main/Home/category/CategoryDetail/CategoryDetail';
import SelectRole from './src/Components/SelectRole/SelectRole';
import Sale from './src/Components/Main/Home/MainView/Sale/Sale';
const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Loading" component={Loading} />

          <Stack.Screen name="SelectRole" component={SelectRole} />
          <Stack.Screen name="Authenication" component={Authenication} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="HistoryCart" component={HistoryCart} />
          <Stack.Screen name="HistoryScore" component={HistoryScore} />
          <Stack.Screen name="ContactUpdate" component={ContactUpdate} />

          <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
          <Stack.Screen name="Sale" component={Sale} />
          <Stack.Screen
            name="HistoryRecyclables"
            component={HistoryRecyclables}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
