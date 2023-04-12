import React, {memo} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text} from 'react-native';
import auth from '@react-native-firebase/auth';

function DrawerContent(props) {
  console.log(props);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        labelStyle={appColor}
        label={'Privacy Policy'}
        onPress={() => alert('Link to help')}
      />
      <DrawerItem
        labelStyle={appColor}
        label={'Terms and Conditions'}
        onPress={() => {
          alert('Link to help');
          props.navigation.navigate('Task');
          props.navigation.closeDrawer();
          console.log('PROPS::>> ', props);
        }}
      />
      <DrawerItem
        label={'Logout'}
        labelStyle={appColor}
        onPress={() => {
          auth().signOut();
        }}
      />
    </DrawerContentScrollView>
  );
}
const appColor = {
  color: '#173147',
  fontSize: 15,
  lineHeight: 20,
  fontWeight: 700,
};
export default memo(DrawerContent);

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem label="Help" onPress={() => alert('Link to help')} />
//     </DrawerContentScrollView>
//   );
// }
