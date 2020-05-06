import React from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { Box, TextBox, ImageBox } from "../components/styled-components";

export default function BookList({ navigation, data }) {
  return (
    <Box flex={1} p={10}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation} />
        )}
        ItemSeparatorComponent={() => <Box height={10} />}
      />
    </Box>
  );
}

function ListItem({ navigation, item }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Book Detail", { id: item.id })}
    >
      <Box flexDirection="row" width="100%" height={150}>
        <ImageBox width={150} source={{ uri: item.img_url }} />
        <Box flex={1} bg="#ebebeb" p={10}>
          <TextBox>{item.title}</TextBox>
          <TextBox>Language: {item.language}</TextBox>
          <TextBox>
            Author:
            {item.authors[0].first_name + " " + item.authors[0].last_name}
          </TextBox>
          <TextBox>Total Time: {item.totaltime}</TextBox>
          <TextBox>Number of Sections: {item.num_sections}</TextBox>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
