import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoryScreen from "../screens/category";
import CategoryTopTab from "./category-top-tab";
import ListDetail from "../screens/list-detail";
import BookDetail from "../screens/book-detail";

const CategoryStack = createStackNavigator();

export default function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Category"
        component={CategoryScreen}
        options={{ title: "Categories" }}
      />
      <CategoryStack.Screen
        name="CategoryTopTab"
        component={CategoryTopTab}
        options={{ title: "Categories" }}
      />
      <CategoryStack.Screen name="Book Detail" component={BookDetail} />
      <CategoryStack.Screen name="List Detail" component={ListDetail} />
    </CategoryStack.Navigator>
  );
}
