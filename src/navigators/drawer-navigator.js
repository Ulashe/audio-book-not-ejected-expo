import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabNavigator from "./bottom-tab-navigator";
// Eklenecek sayfa burada import edilip Drawer.Screen eklenerek kullanılır

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Bottom-Tab-Navigator" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}
