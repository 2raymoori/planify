import React, {memo, useState} from 'react';
import {Text, View} from 'react-native';
import Title from '../../../Component/Title';
import styles from './styles.Login';
import Input from '../../../Component/Input';
import Button from '../../shared/Button';
import AuthFooter from '../../../Component/AuthFooter';
import auth from '@react-native-firebase/auth';
const Login = props => {
  const onBtnLoginClick = () => {
    console.log(formData);
    auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then((e) => {
        console.log('Sign in success :: >> ',e);
      })
      .catch(error => {
        console.log('Error... ', error);
      });
  };
  const [formData, setFormData] = useState({email: '', password: ''});

  const processInput = (data, name) => {
    // console.log(data," :: ",name);
    setFormData(prevState => ({
      ...prevState,
      [name]: data,
    }));
  };

  return (
    <View style={styles.container}>
      <Title text={'Welcome back!'} />
      <Input
        processInput={processInput}
        value={formData.email}
        name={'email'}
        title={'Email'}
        keyboardType={'email-address'}
      />
      <Input
        processInput={processInput}
        value={formData.password}
        name={'password'}
        title={'Password'}
        secureTextEntry
      />
      <Button
        customStyle={{marginTop: 20}}
        onBtnPress={onBtnLoginClick}
        loginBtnText={styles.loginBtnText}
        containerStyle={styles.loginBtnContainer}
        text={'Login in'}
      />
      <AuthFooter
        leftText={'Not registered? '}
        nav={props.navigation}
        rightText={'Sign up!'}
      />
    </View>
  );
};
export default memo(Login);
