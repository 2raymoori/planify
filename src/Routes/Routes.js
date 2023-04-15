/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {memo,useEffect,useState} from 'react';
import Onboarding from '../Screen/auth/Onboarding';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screen/auth/Login/index.Login';
import SignUp from "../Screen/auth/Signup/index.signup";
import auth from "@react-native-firebase/auth";
import { Button, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigation from "./Routes.drawer";
import Home from "../Screen/app/Home/index.home";
import AddTask from "../Screen/app/AddTask/index.Addtask";
import Task from "../Screen/app/Task/index.Task";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Rdux/User";
// import CreateDrawerNavigator from "@react-navigation/drawer/src/navigators/createDrawerNavigator";


function Route() {
  const StackNavigator = createStackNavigator();
  const user = useSelector(state => state.user?.data);
  //const [user,setUser] = useState(null);
  const [initializing,setInitialzing] = useState(true);
  const dispatch = useDispatch();

  const Drawer = createDrawerNavigator();
  // console.log('userss::>> ', user);

  const onAuthStateChanged = (user)=>{
    dispatch(setUser(user));
    if(initializing){
      setInitialzing(false)
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  console.log("FROM ROUTES...",user);
  if(user){
    return (
      <DrawerNavigation />
    )
  }
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
