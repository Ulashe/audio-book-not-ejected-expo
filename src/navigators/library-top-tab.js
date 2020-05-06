import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import LibraryFirstTab from "../screens/libraryFirstTab";
import LibrarySecondTab from "../screens/librarySecondTab";
import LibraryThirdTab from "../screens/libraryThirdTab";
import LibraryFourthTab from "../screens/libraryFourthTab";

const TopTab = createMaterialTopTabNavigator();

export default function LibraryTopTab() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="LibraryFirstTab"
        component={LibraryFirstTab}
        options={{ title: "Listening" }}
      />
      <TopTab.Screen
        name="LibrarySecondTab"
        component={LibrarySecondTab}
        options={{ title: "Will Be Listened" }}
      />
      <TopTab.Screen
        name="LibraryThirdTab"
        component={LibraryThirdTab}
        options={{ title: "Listened" }}
      />
      <TopTab.Screen
        name="LibraryFourthTab"
        component={LibraryFourthTab}
        options={{ title: "Likes" }}
      />
    </TopTab.Navigator>
  );
}
