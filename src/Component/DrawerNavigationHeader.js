import React, {memo} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

const DrawerNavigationHeader = props => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log('Menu Pressed');
          props.nav.openDrawer()
        }}>
        <Image style={styles.icon} source={require('../assets/menu.png')} />
      </Pressable>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,

    // flex: 1,
    // position: 'relative',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    color: 'purple',
    fontWeight: 500,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default memo(DrawerNavigationHeader);
