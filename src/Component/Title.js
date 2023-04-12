import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = props => {
  const {color,fontWeight,fontSize} = props;
  return (
    <View>
      <Text style={[styles.text,{color,fontWeight,fontSize }]}>{props.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 36,
    letterSpacing: 0.36,
    color: '#173147',
  },
});
export default memo(Title);
