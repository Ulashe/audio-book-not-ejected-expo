import React from "react";
import { View, Text, Button, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Root from './src/navigators/root.js';

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
