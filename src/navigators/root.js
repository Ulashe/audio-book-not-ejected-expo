import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Main from "./main";
// Eklenecek sayfa burada import edilip Drawer.Screen eklenerek kullanılır

const Drawer = createDrawerNavigator();

export default function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="main" component={Main} />
    </Drawer.Navigator>
  );
}
