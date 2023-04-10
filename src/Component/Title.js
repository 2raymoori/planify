import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = props => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 36,
    letterSpacing: 0.36,

    color: '#173147',
  },
});
export default memo(Title);
