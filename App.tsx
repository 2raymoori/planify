/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Animated from 'react-native-reanimated';
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import Route from './src/Routes/Routes';


function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user) {
      return <Text>Welcome</Text>;
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
