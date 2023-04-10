/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Onboarding from './src/Screen/auth/Onboarding';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Screen/auth/Login/index.Login';
import SignUp from "./src/Screen/auth/Signup/index.signup";

function App() {
  const StackNavigator = createStackNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StackNavigator.Navigator>
          <StackNavigator.Screen options={{headerShown:false}} name={"signUp"} component={SignUp} />
          <StackNavigator.Screen options={{headerShown:false}} name={'Login'} component={Login} />
          <StackNavigator.Screen
            options={{headerShown: false}}
            name={'Onboarding'}
            component={Onboarding}
          />
        </StackNavigator.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
