import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import store from './src/Redux/Redux';
import {Provider} from 'react-redux';

import Loading from './src/Components/Loading/Loading';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authenication from './src/Components/Authenication/Authenication';
import Main from './src/Components/Main/Main';
import MapView from './src/Components/Main/Home/MainView/Map/MapView';
import HandleRecy from './src/Components/Main/Home/MainView/Map/HandleRecy/HandleRecy';
import HandleSucess from './src/Components/Main/Home/MainView/Map/HandleRecy/HandleSucess';
const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Authenication" component={Authenication} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="HandleRecy" component={HandleRecy} />
          <Stack.Screen name="MapView" component={MapView} />
          <Stack.Screen name="HandleSucess" component={HandleSucess} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
