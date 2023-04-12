import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screen/app/Home/index.home";
import AddTask from "../Screen/app/AddTask/index.Addtask";
import Task from "../Screen/app/Task/index.Task";
import React from "react";
import TabNavigation from "./Routes.tab";
const Drawer = createDrawerNavigator();
const DrawerNavigation = ()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen name={'Tabs'} component={TabNavigation} />
      <Drawer.Screen name={'AddTask'} component={AddTask} />
      <Drawer.Screen name={'Task'} component={Task} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation;
