import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/home";
import BookDetail from "../screens/book-detail";
import ListDetail from "../screens/list-detail";

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Book Detail" component={BookDetail} />
      <HomeStack.Screen name="List Detail" component={ListDetail} />
    </HomeStack.Navigator>
  );
}
