/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {memo} from 'react';
import Onboarding from '../Screen/auth/Onboarding';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screen/auth/Login/index.Login';
import SignUp from "../Screen/auth/Signup/index.signup";

function Route() {
  const StackNavigator = createStackNavigator();
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        options={{headerShown: false}}
        name={'Onboarding'}
        component={Onboarding}
      />
      <StackNavigator.Screen
        options={{headerShown: false}}
        name={'signUp'}
        component={SignUp}
      />
      <StackNavigator.Screen
        options={{headerShown: false}}
        name={'Login'}
        component={Login}
      />
    </StackNavigator.Navigator>
  );
}

export default memo(Route);
