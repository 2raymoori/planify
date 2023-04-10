import React, {memo} from 'react';
import {Text, View} from 'react-native';
import Title from '../../../Component/Title';
import styles from './styles.Login';
import Input from '../../../Component/Input';
import Button from '../../shared/Button';
import AuthFooter from '../../../Component/AuthFooter';
const Login = props => {
  const onBtnLoginClick = () => {};
  return (
    <View style={styles.container}>
      <Title text={'Welcome back!'} />
      <Input title={'Email'} />
      <Input title={'Password'} />
      <Button
        customStyle={{marginTop: 20}}
        onBtnPress={onBtnLoginClick}
        loginBtnText={styles.loginBtnText}
        containerStyle={styles.loginBtnContainer}
        text={'Login in'}
      />
      <AuthFooter leftText={'Not registered? '} rightText={'Sign up!'} />
    </View>
  );
};
export default memo(Login);
