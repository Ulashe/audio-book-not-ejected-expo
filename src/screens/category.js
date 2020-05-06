import React from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { Box, TextBox } from "../components/styled-components";

const DATA = require("../sample-data/categories-api.json");

export default function CategoryScreen({ navigation }) {
  return (
    <Box flex={1}>
      <FlatList
        data={DATA.categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ListItem text={item} navigation={navigation} />
        )}
        ItemSeparatorComponent={() => <Box width="100%" height={5} bg="#ddd" />}
      />
    </Box>
  );
}

function ListItem({ text, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryTopTab", { category: text })}
    >
      <Box py={20} pl={20}>
        <TextBox fontSize={20}>{text}</TextBox>
      </Box>
    </TouchableOpacity>
  );
}
