import React, {memo, useState} from 'react';
import {TextInput, StyleSheet, View, Platform} from 'react-native';

const platform = Platform.OS;
const Input = props => {
  const test = e => {
    props.processInput(e, props.name);
  };
  return (
    <View style={styles.textContainer}>
      <TextInput
        onChangeText={test}
        {...props}
        style={platform === 'ios' ? styles.textContainerIOS : styles.textInput}
        placeholder={props.title}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textContainer: {},
  textInput: {
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    marginBottom: 24,
    paddingLeft: 24,
    fontSize: 20,
  },
  textContainerIOS: {
    // backgroundColor:"red",
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    paddingLeft: 24,
    paddingVertical: 14,
    fontSize: 15,
    marginBottom: 24,
  },
});
export default memo(Input);

/*
 user::>>  {
 "displayName": null,
 "email": "lo2raymoori@gmail.com", "emailVerified": false, "isAnonymous": false,
  "metadata": {"creationTime": 1681199850077, "lastSignInTime": 1681199850077},
  "multiFactor": {"enrolledFactors": [Array]}, "phoneNumber": null, "photoURL": null, "providerData": [[Object]], "providerId": "firebase", "refreshToken": "APJWN8duLh-ecWuXJQ5LFkTZ3MGFVAEBwC3mvluihNegDaaNYB-eAPi1UsihUdo9rFz2wDQjOc8-rmut2Ggh6UqeM_gaLxjF2ckTKXd5MKrdEMY9MG64m2pXCwKEtJZ9igrxW4urfeoCY_Os3Tqs2kTtlG4yPJ-uuzyQcLpOcQSXiKBT0i3Zod5MLYU0zaHwTKF6Wkdb7PnorIzI2MpGV8IdWHHjXXFLTg", "tenantId": null, "uid": "Ri4OlRpuRlZochM6n931zVlwvvG3"}

 */
