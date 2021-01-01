import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
// var ScrollableTabView = require('react-native-scrollable-tab-view');
var ScrollableTabView = require('react-native-scrollable-tab-view');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MainView = (props) => {
  const navigation = useNavigation();

  const {t, i18n} = useTranslation();

  return (
    <View>
      <Text>cn</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
  };
}
export default connect(mapStateToProps)(MainView);
