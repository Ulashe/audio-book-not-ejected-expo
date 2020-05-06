import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import CategoryFirstTab from "../screens/categoryFirstTab";
import CategorySecondTab from "../screens/categorySecondTab";
import CategoryThirdTab from "../screens/categoryThirdTab";
import CategoryFourthTab from "../screens/categoryFourthTab";

const TopTab = createMaterialTopTabNavigator();

export default function CategoryTopTab({ route }) {
  // Category sayfasından bu stack'e parametre gönderildi.
  // Bu parametre initialParams prop'u ile alt screen'lere aktarıldı.
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="CategoryFirstTab"
        component={CategoryFirstTab}
        options={{ title: "Most Listened" }}
        initialParams={{ category: route.params.category }}
      />
      <TopTab.Screen
        name="CategorySecondTab"
        component={CategorySecondTab}
        options={{ title: "Top Rated" }}
        initialParams={{ category: route.params.category }}
      />
      <TopTab.Screen
        name="CategoryThirdTab"
        component={CategoryThirdTab}
        options={{ title: "Last Added" }}
        initialParams={{ category: route.params.category }}
      />
      <TopTab.Screen
        name="CategoryFourthTab"
        component={CategoryFourthTab}
        options={{ title: "Lists" }}
        initialParams={{ category: route.params.category }}
      />
    </TopTab.Navigator>
  );
}
