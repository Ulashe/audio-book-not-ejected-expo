import React from "react";
import { View, StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TopFirst from "../screens/TopFirst";
import TopSecond from "../screens/TopSecond";
import TopThird from "../screens/TopThird";
import TopFourth from "../screens/TopFourth";

const TopTab = createMaterialTopTabNavigator();

export default function LibraryTopBar() {
  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <TopTab.Navigator>
        <TopTab.Screen name="First" component={TopFirst} />
        <TopTab.Screen name="Second" component={TopSecond} />
        <TopTab.Screen name="Third" component={TopThird} />
        <TopTab.Screen name="Fourth" component={TopFourth} />
      </TopTab.Navigator>
    </View>
  );
}
