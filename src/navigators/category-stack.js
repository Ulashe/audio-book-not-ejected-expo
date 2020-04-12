import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoryScreen from "../screens/category";

const CategoryStack = createStackNavigator();

export default function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Category" component={CategoryScreen} />
    </CategoryStack.Navigator>
  );
}
