import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ICTranfer2 from '../../../../../../Images/Icons/open-box.png';
import ICTranfer1 from '../../../../../../Images/Icons/zoom.png';
import ICTranfer3 from '../../../../../../Images/Icons/checked.png';
const HandleRecy = () => {
  return (
    <View>
      <View style={styles.wrapperInLineHeader}>
        <Image style={styles.wrapperImage} source={ICTranfer1} />
        <Image style={styles.wrapperImage} source={ICTranfer2} />
        <Image style={styles.wrapperImage} source={ICTranfer3} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperInLineHeader: {
    flexDirection: 'row',
  },
  wrapperImage: {
    height: '50',
    width: '50',
  },
});
export default HandleRecy;
