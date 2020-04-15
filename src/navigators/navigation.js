import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./drawer-navigator";

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
