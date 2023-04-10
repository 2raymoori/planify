import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
const Button = props => {
  return (
    <TouchableOpacity onPress={props.onBtnPress} style={[props.containerStyle]}>
      <Text style={[props.loginBtnText]}>{props.text}</Text>
    </TouchableOpacity>
  );
};
export default memo(Button);
