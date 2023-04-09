// @ts-ignore
import React, {memo} from 'react';
import { Dimensions, Image, Platform, Text, TouchableOpacity, View } from "react-native";

const height = Dimensions.get("window").height;
const platformType = Platform.OS;
import styles from './styles';

const Onboarding = () => {
  console.log(platformType," :: ",height);
  return (
    <View>
      <Image
        source={require('../../../assets/onboarding.png')}
        style={styles.image}
      />
      <View style={styles.footerSection}>
        <View style={styles.footerTextContainer}>

          <Text style={styles.footerHeader}>Best task management app</Text>
          <Text style={styles.footerDescription}>Get organized by sorting out all your tasks and boost your productivity.</Text>
        </View>
        <View style={styles.footerBtnContainer}>

          <TouchableOpacity style={styles.loginBtnContainer}>
            <Text style={styles.loginBtnText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupBtnContainer}>
            <Text style={styles.signupBtnText}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );ß
};
export default memo(Onboarding);
