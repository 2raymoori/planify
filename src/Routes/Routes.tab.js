import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUp from '../Screen/auth/Signup/index.signup';
import Login from '../Screen/auth/Login/index.Login';

const TabNavigation = () => {
  const TabNavi = createBottomTabNavigator();
  return (
    <TabNavi.Navigator>
      <TabNavi.Screen name={'sUP'} component={SignUp} />
      <TabNavi.Screen name={'LGN'} component={Login} />
    </TabNavi.Navigator>
  );
};

export default TabNavigation;
