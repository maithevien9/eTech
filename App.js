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
import Collect from './src/Components/Main/Home/Collect/Collect';
import Gift from './src/Components/Main/Home/Gift/Gift';
import Points from './src/Components/Main/Home/Points/Points';
import HistoryGift from './src/Components/Main/Home/Menu/HistoryGift';
import HistoryScore from './src/Components/Main/Home/Menu/HistoryScore';
import HistoryRecyclables from './src/Components/Main/Home/Menu/HistoryRecyclable';
import ContactUpdate from './src/Components/Main/Contact/ContactUpdate';
import Handled from './src/Components/Main/Home/Collect/HandleRecyclables/Handled';
import Booking from './src/Components/Main/Home/Collect/HandleRecyclables/Booking/Booking';
import CategoryDetail from './src/Components/Main/Home/category/CategoryDetail/CategoryDetail';
import SelectRole from './src/Components/SelectRole/SelectRole';
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
          <Stack.Screen name="Collect" component={Collect} />
          <Stack.Screen name="Gift" component={Gift} />
          <Stack.Screen name="Points" component={Points} />
          <Stack.Screen name="HistoryGift" component={HistoryGift} />
          <Stack.Screen name="HistoryScore" component={HistoryScore} />
          <Stack.Screen name="ContactUpdate" component={ContactUpdate} />
          <Stack.Screen name="Handled" component={Handled} />
          <Stack.Screen name="Booking" component={Booking} />
          <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
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
