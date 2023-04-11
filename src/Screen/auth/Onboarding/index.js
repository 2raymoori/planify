// @ts-ignore
import React, {memo} from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';
import Button from '../../shared/Button';

const Onboarding = props => {
  const onBtnLoginClick = () => {
    props.navigation.navigate('Login');
  };
  const onBtnSignupClick = () => {
    props.navigation.navigate('signUp');
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Image
          source={require('../../../assets/onboarding.png')}
          style={styles.image}
        />
        <View style={styles.layer} />
      </View>
      <View style={styles.footerSection}>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerHeader}>Best task management app</Text>
          <Text style={styles.footerDescription}>
            Get organized by sorting out all your tasks and boost your
            productivity.
          </Text>
        </View>
        <View style={styles.footerBtnContainer}>
          <Button
            onBtnPress={onBtnLoginClick}
            loginBtnText={styles.loginBtnText}
            containerStyle={styles.loginBtnContainer}
            text="login in"
          />
          <Button
            onBtnPress={onBtnSignupClick}
            loginBtnText={styles.signupBtnText}
            containerStyle={styles.signupBtnContainer}
            text="Get started"
          />
        </View>
      </View>
    </View>
  );
};
export default memo(Onboarding);
