import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import icNotify from '../../Images/Icons/notification.png';
import icNotify2 from '../../Images/Icons/notification2.png';
import icHome from '../../Images/Icons/home2.png';
import icHome2 from '../../Images/Icons/home.png';
import icNote from '../../Images/Icons/note.png';
import icNote2 from '../../Images/Icons/note2.png';
import QA from '../../Images/Icons/qa.png';
import QA2 from '../../Images/Icons/qa2.png';
import User from '../../Images/Icons/profile-user2.png';
import User2 from '../../Images/Icons/profile-user.png';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Notify from './Notify/NotifyView';
import Cart from './Cart/Cart';
import ContactMain from './Contact/Contact';
import GetInforUser from '../../RestAPI/User/get-infor-user';
import {connect} from 'react-redux';
import NotifyAPI from '../../RestAPI/Notify/get-notify-api';

const Main = (props) => {
  const [selectedTab, setSelectedTab] = React.useState('Notify');
  const HandleSelectContact = () => {
    // GetInforUser(props.dataLogin.token)
    //   .then((json) => {
    //     var data = JSON.parse(JSON.stringify(json));
    //     // console.log(data);
    //     if (data.dataString === 'THANH_CONG') {
    //       props.dispatch({
    //         type: 'setInforUser',
    //         data: data.data,
    //       });
    //       // setSelectedTab('Contact');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error + 'fail');
    //   });
    setSelectedTab('Contact');
  };
  const HandleSelectNotify = () => {
    // NotifyAPI(props.dataLogin.token)
    //   .then((json) => {
    //     var data = JSON.parse(JSON.stringify(json));
    //     console.log(data);
    //     props.dispatch({
    //       type: 'setdataNotify',
    //       data: data.data,
    //     });
    //     if (data.dataString === 'THANH_CONG') {
    //       setSelectedTab('notify');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error + 'fail');
    //   });
    setSelectedTab('Cart');
  };
  return (
    <TabNavigator tabBarStyle={{height: 53}}>
      <TabNavigator.Item
        selected={selectedTab === 'home'}
        title="Trang Chủ"
        renderIcon={() => <Image source={icHome} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={icHome2} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('home')}>
        <Home />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'Cart'}
        title="Giỏ Hàng"
        badgeText={props.Cart.length}
        renderIcon={() => (
          <Image source={icNotify} style={styles.wrapperImage} />
        )}
        renderSelectedIcon={() => (
          <Image source={icNotify2} style={styles.wrapperImage} />
        )}
        onPress={() => {
          HandleSelectNotify();
        }}>
        <Cart />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'Notify'}
        title="Thông báo"
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
        title="Thông Tin"
        renderIcon={() => <Image source={User2} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={User} style={styles.wrapperImage} />
        )}
        onPress={() => HandleSelectContact()}>
        <ContactMain />
      </TabNavigator.Item>
    </TabNavigator>
  );
};
const styles = StyleSheet.create({
  wrapperImage: {height: 23, width: 23},
});
function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Cart: state.Cart,
  };
}
export default connect(mapStateToProps)(Main);
