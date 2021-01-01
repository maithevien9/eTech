import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import icEmail from '../../../Images/Icons/email.png';
import Notify from '../../../RestAPI/Notify/get-notify-api';
import {connect} from 'react-redux';

import {useTranslation} from 'react-i18next';

const NotifyView = (props) => {
  const {t, i18n} = useTranslation();
  const convertDate = (date) => {
    var ts = new Date(date);
    return ts.toLocaleDateString();
  };
  const convertDate2 = (date) => {
    var ts = new Date(date);
    return ts.toLocaleTimeString();
  };
  return (
    // <View>
    //   <Text>{t('Hello')}</Text>
    // </View>
    <ScrollView>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>{t('Nofity')}</Text>
      </View>
      {/* <View style={styles.wrapperMain2}> */}
      {/* <View style={{height: 4, backgroundColor: '#FFFFFF'}}></View> */}

      <View style={styles.wrapperMain}>
        {props.dataNotify.map((e) => (
          <View style={styles.wrapperNotify} key={e.ID}>
            <View style={styles.wrapperInNotyfi}>
              <View style={styles.wrapperImageInNotify}>
                <Image source={icEmail} style={styles.wrapperImage} />
              </View>
              <View style={{width: 350, marginLeft: 20}}>
                <View style={{width: '85%'}}>
                  <Text style={styles.wrapperTextInNotify}>{e.Name}</Text>
                </View>
                <Text style={styles.StyleTextTime}>
                  {convertDate(e.CreateAtTime)} {convertDate2(e.CreateAtTime)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
    dataNotify: state.dataNotify,
  };
}
export default connect(mapStateToProps)(NotifyView);

const styles = StyleSheet.create({
  wrapperMain: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  wrapperMain2: {
    height: '100%',
    width: '100%',
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
  },
  wrapperHeader: {
    height: 80,
    width: '100%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyleHeader: {
    fontSize: 28,
    fontFamily: 'monospace',
    color: 'white',
    fontWeight: 'bold',
  },
  wrapperNotify: {
    height: 80,
    width: '97%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 12,
  },
  wrapperImage: {
    height: 30,
    width: 30,
  },
  wrapperInNotyfi: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperTextInNotify: {
    fontSize: 18,
    fontFamily: 'monospace',
    color: 'black',
  },
  wrapperImageInNotify: {
    marginLeft: 20,
  },
  StyleTextTime: {
    fontSize: 11,
    fontFamily: 'monospace',
    color: 'black',
  },
});
