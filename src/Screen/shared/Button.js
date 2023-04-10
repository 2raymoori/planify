import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
const Button = props => {
  return (
    <TouchableOpacity onPress={props.onBtnPress} style={[props.containerStyle,props.customStyle]}>
      <Text style={[props.loginBtnText]}>{props.text}</Text>
    </TouchableOpacity>
  );
};
Button.defaultProps ={
  customStyle:null
}
export default memo(Button);
