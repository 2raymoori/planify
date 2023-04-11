import {Pressable, View} from 'react-native';
import React, {memo} from 'react';

const CheckBox = props => {
  return (
    <Pressable
      onPress={() => {
        props.onCheck();
        console.log('sdfs');
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: '#403572',
        borderWidth: 2,
        height: 20,
        width: 20,
      }}>
      <View
        style={{
          height: 13,
          width: 13,
          borderRadius: 3,
          backgroundColor: props.isChecked ? '#403572' : null,
        }}
      />
    </Pressable>
  );
};
export default memo(CheckBox);
