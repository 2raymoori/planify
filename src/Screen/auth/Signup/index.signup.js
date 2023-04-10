import React, {memo} from 'react';
import {Text, View} from 'react-native';
import Title from '../../../Component/Title';
import styles from './style.signup';
import Input from '../../../Component/Input';
import Button from '../../shared/Button';
import AuthFooter from '../../../Component/AuthFooter';
const SignUp = props => {
  const onBtnSignupClick = () => {};
  return (
    <View style={styles.container}>
      <Title text={'Join the hub!'} />
      <Input title={'First Name'} />
      <Input title={'Last Name'} />
      <Input title={'Email'} />
      <Input title={'Password'} />
      <Input title={'Confirm Password'} />
      <View>
      </View>
      <Button
        customStyle={{marginTop: 20}}
        onBtnPress={onBtnSignupClick}
        loginBtnText={styles.loginBtnText}
        containerStyle={styles.loginBtnContainer}
        text={'Create Account'}
      />
      <AuthFooter leftText={'Already registered? '} rightText={'Sign in!'} />
    </View>
  );
};
export default memo(SignUp);
