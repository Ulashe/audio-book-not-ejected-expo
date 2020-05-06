import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackScreen from "./home-stack";
import CategoryStackScreen from "./category-stack";
import LibraryStackScreen from "./library-stack";
import ProfileStackScreen from "./profile-stack";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen name="CategoryStack" component={CategoryStackScreen} />
      <Tab.Screen name="LibraryStack" component={LibraryStackScreen} />
      <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}
