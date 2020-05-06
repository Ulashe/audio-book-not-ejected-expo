import React from "react";
import { Image, FlatList, TouchableOpacity } from "react-native";

import { Box, TextBox, ImageBox } from "../components/styled-components";

const DATA = require("../sample-data/home_screen-api.json");

export default function Lists({ navigation, data }) {
  return (
    <Box flex={1} pt={10}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            label={item.label}
            list={item.list}
            id={item.id}
            navigation={navigation}
          />
        )}
        ItemSeparatorComponent={() => <Box height={10} />}
      />
    </Box>
  );
}

function ListItem({ id, label, list, navigation }) {
  return (
    <Box width="100%" height={200} justifyContent="center" alignItems="center">
      {/* label */}
      <Box
        width="100%"
        height={40}
        flexDirection="row"
        justifyContent="space-between"
        pl={20}
      >
        <TextBox fontSize={20}>{label}</TextBox>
        <Box mr={10} justifyContent="center">
          <TouchableOpacity
            onPress={() => navigation.navigate("List Detail", { id: id })}
          >
            <TextBox>More Detail</TextBox>
          </TouchableOpacity>
        </Box>
      </Box>
      {/* interior flatlist */}
      <Box width="100%" height={160} pl={20}>
        <FlatList
          horizontal={true}
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <InnerListItem
              id={item.id}
              title={item.title}
              img_url={item.img_url}
              img_width={item.img_width}
              img_height={item.img_height}
              navigation={navigation}
            />
          )}
          ItemSeparatorComponent={() => <Box width={10} />}
        />
      </Box>
    </Box>
  );
}

function InnerListItem({
  id,
  navigation,
  title,
  img_url,
  img_width,
  img_height,
}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Book Detail", { id: id })}
    >
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
