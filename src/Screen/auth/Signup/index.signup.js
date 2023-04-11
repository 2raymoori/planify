import React, {memo, useState} from 'react';
import {Alert, Pressable, ScrollView, Text, View} from 'react-native';
import Title from '../../../Component/Title';
import styles from './style.signup';
import Input from '../../../Component/Input';
import Button from '../../shared/Button';
import AuthFooter from '../../../Component/AuthFooter';
import CheckBox from '../../shared/CheckBox';
import auth from '@react-native-firebase/auth';
const SignUp = props => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });
  const onBtnSignupClick = () => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert(
        'Error',
        'Sorry Password and confirm Password must be the dame',
        [<Button title={'Ok'} />],
      );
      return;
    }
    if (!isChecked) {
      Alert.alert(
        'error',
        'Sorry you need to agree to the terms and conditions.',
        [<Button title="ok" />],
      );

      return;
    }
    auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(() => {
        const update = {
          displayName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
        };

        auth()
          .currentUser.updateProfile(update)
          .then(() => {
            console.log("profile successfully updated...");
          })
          .catch(() => {});
        console.log('User successfully created.');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
    console.log(formData);
  };
  const onChecked = () => {
    setIsChecked(!isChecked);
  };
  const processInput = (data, name) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: data,
    }));
  };
  return (
    <ScrollView
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Title text={'Join the hub!'} />
        <Input
          processInput={processInput}
          value={formData.firstName}
          name={'firstName'}
          title={'First Name'}
        />
        <Input
          processInput={processInput}
          value={formData.lastName}
          name={'lastName'}
          title={'Last Name'}
        />
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
        <Input
          processInput={processInput}
          value={formData.confirmPassword}
          name={'confirmPassword'}
          title={'Confirm Password'}
          secureTextEntry
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 5,
            alignItems: 'center',
          }}>
          <CheckBox onCheck={onChecked} isChecked={isChecked} />
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Text style={{fontSize: 15}}>I agree to </Text>
            <Text
              style={{
                textDecorationLine: 'underline',
                fontSize: 15,
                color: 'black',
              }}>
              Terms and Conditions
            </Text>
            <Text style={{fontSize: 15}}> and </Text>
            <Text
              style={{
                textDecorationLine: 'underline',
                fontSize: 15,
                color: 'black',
              }}>
              Privacy Policy
            </Text>
          </View>
        </View>
        <Button
          customStyle={{marginTop: 20}}
          onBtnPress={onBtnSignupClick}
          loginBtnText={styles.loginBtnText}
          containerStyle={styles.loginBtnContainer}
          text={'Create Account'}
        />
        <AuthFooter
          leftText={'Already registered? '}
          nav={props.navigation}
          rightText={'Sign in!'}
        />
      </View>
    </ScrollView>
  );
};
export default memo(SignUp);
