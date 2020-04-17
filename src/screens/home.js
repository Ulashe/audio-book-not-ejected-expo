import React from "react";
import { Image, FlatList, TouchableOpacity } from "react-native";

import { Box, TextBox, ImageBox } from "../components/styled-components";

const DATA = require("../../home_screen-api.json");

export default function HomeScreen() {
  return (
    <Box flex={1}>
      <FlatList
        data={DATA.lists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem label={item.label} list={item.list} />
        )}
        ItemSeparatorComponent={() => <Box height={10} />}
      />
    </Box>
  );
}

function ListItem({ label, list }) {
  return (
    <Box width="100%" height={200} justifyContent="center" alignItems="center">
      {/* label */}
      <Box width="100%" height={40} justifyContent="center" pl={20}>
        <TextBox fontSize={20}>{label}</TextBox>
      </Box>
      {/* interior flatlist */}
      <Box width="100%" height={160} pl={20}>
        <FlatList
          horizontal={true}
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <InnerListItem
              title={item.title}
              img_url={item.img_url}
              img_width={item.img_width}
              img_height={item.img_height}
            />
          )}
          ItemSeparatorComponent={() => <Box width={10} />}
        />
      </Box>
    </Box>
  );
}

function InnerListItem({ title, img_url, img_width, img_height }) {
  return (
    <TouchableOpacity>
      <ImageBox
        width={img_width * (120 / img_height)}
        height={120}
        source={{
          uri: img_url,
        }}
      />
      <TextBox width={120} textAlign="center">
        {title}
      </TextBox>
    </TouchableOpacity>
  );
}
