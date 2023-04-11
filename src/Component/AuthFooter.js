import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AuthFooter = props => {
  //  nav={props.navigation} rightText={'Sign in!'
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{props.leftText}</Text>
      <Text onPress={()=>{props.rightText === "Sign in!" ? props.nav.navigate("Login") : props.nav.navigate("signUp")  }} style={styles.rightText}>{props.rightText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  leftText: {
    fontStyle: 'normal',
    fontSize: 18,
    letterSpacing: 0.36,

    color: '#8B97A8',
  },
  rightText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default memo(AuthFooter);
