import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LibraryTopTab from "./library-top-tab";
import BookDetail from "../screens/book-detail";

const LibraryStack = createStackNavigator();

export default function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="Library Top Tab" component={LibraryTopTab} />
      <LibraryStack.Screen name="Book Detail" component={BookDetail} />
    </LibraryStack.Navigator>
  );
}
