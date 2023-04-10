// @ts-ignore
import React, {memo} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const height = Dimensions.get('window').height;
const platformType = Platform.OS;
import styles from './styles';
import Button from '../../shared/Button';

const Onboarding = () => {
  console.log(platformType, ' :: ', height);
  const onBtnLoginClick = () => {
    console.log('Login');
  };
  const onBtnSignupClick = () => {
    console.log('Signup');
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
  ß;
};
export default memo(Onboarding);
