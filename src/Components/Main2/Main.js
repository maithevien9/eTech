import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import icFace from '../../Images/Icons/face2.png';
import icFace2 from '../../Images/Icons/face.png';
import icHome from '../../Images/Icons/home2.png';
import icHome2 from '../../Images/Icons/home.png';
import icNote from '../../Images/Icons/note.png';
import icNote2 from '../../Images/Icons/note2.png';
import User from '../../Images/Icons/profile-user2.png';
import User2 from '../../Images/Icons/profile-user.png';
import Contact from '../Main/Contact/Contact';
import Notify from '../Main/Notify/NotifyView';
import Home from './Home/Home';
import PackageOnSale from './Home/Menu/PackageOnSale';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
const Main2 = (props) => {
  const [selectedTab, setSelectedTab] = React.useState('home');
  const {t, i18n} = useTranslation();
  const HandleSelectContact = () => {
    setSelectedTab('Contact');
  };
  const HandleSelectNotify = () => {
    setSelectedTab('Cart');
  };
  return (
    <TabNavigator tabBarStyle={{height: 53}}>
      <TabNavigator.Item
        selected={selectedTab === 'home'}
        title={t('Home')}
        titleStyle={styles.tabTitle}
        renderIcon={() => <Image source={icHome} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={icHome2} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('home')}>
        <Home />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'Cart'}
        title={t('ISell')}
        titleStyle={styles.tabTitle}
        renderIcon={() => <Image source={icFace} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={icFace2} style={styles.wrapperImage} />
        )}
        onPress={() => {
          HandleSelectNotify();
        }}>
        <PackageOnSale />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'Notify'}
        title={t('Nofity')}
        titleStyle={styles.tabTitle}
        renderIcon={() => (
          <Image source={icNote2} style={styles.wrapperImage} />
        )}
        renderSelectedIcon={() => (
          <Image source={icNote} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('Notify')}>
        <Notify />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'Contact'}
        title={t('Contact')}
        titleStyle={styles.tabTitle}
        renderIcon={() => <Image source={User2} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={User} style={styles.wrapperImage} />
        )}
        onPress={() => HandleSelectContact()}>
        <Contact />
      </TabNavigator.Item>
    </TabNavigator>
  );
};
const styles = StyleSheet.create({
  wrapperImage: {height: 23, width: 23},
  tabTitle: {
    fontSize: 10,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});
function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Cart: state.Cart,
  };
}
export default connect(mapStateToProps)(Main2);
