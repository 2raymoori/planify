import React, {memo} from 'react';
import {TextInput, StyleSheet, View, Platform} from 'react-native';

const platform = Platform.OS;
const Input = props => {
  // console.log(platform);
  return (
    <View style={styles.textContainer}>
      <TextInput
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
