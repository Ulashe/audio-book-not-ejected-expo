import React, { useState } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";

import { Box, TextBox, ImageBox } from "../components/styled-components";

const DATA = require("../sample-data/librivox_audiobooks_api.json");

export default function BookDetail({ navigation, route }) {
  // Bu sayfa, başka bir sayfa tarafından parametreler ile birlikte çağrılıyor.

  // route'dan gelen parametredeki id ile aynı id'ye sahip olan kitabı buluyoruz.
  const item = DATA.books.filter((item) => item.id == route.params.id)[0];
  // Elde edilen kitap bilgisini render component'ine gönderiyoruz.
  // DİKKAT!!! Bu sayfa henüz geliştirilme aşamasındadır.
  // Fonksiyonların çalışmasını test etmek amacıyla geçici bir render component kullanılmıştır.
  return <Detail item={item} />;
}

function Detail({ item }) {
  const containerHeight = 200;
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  Image.getSize(item.img_url, (width, height) => {
    setWidth(width);
    setHeight(height);
  });
  return (
    <Box as={ScrollView} flex={1}>
      <Box height={containerHeight} alignItems="center">
        <ImageBox
          height={containerHeight}
          width={width * (containerHeight / height)}
          source={{ uri: item.img_url }}
        />
      </Box>
      <TouchableOpacity>
        <Box height={40} alignItems="center" justifyContent="center">
          <TextBox fontSize={20}>Play</TextBox>
        </Box>
      </TouchableOpacity>
      <Box>
        <TextBox>Title:{" " + item.title}</TextBox>
        <TextBox>
          Authors:{" "}
          {item.authors.map((_item, index) =>
            item.authors.length == index + 1
              ? _item.first_name + " " + _item.last_name
              : _item.first_name + " " + _item.last_name + ", "
          )}
        </TextBox>
        <TextBox>
          Genres:{" "}
          {item.genres.map((_item, index) =>
            item.genres.length == index + 1 ? _item : _item + ", "
          )}
        </TextBox>
        <TextBox>{item.description}</TextBox>
      </Box>
    </Box>
  );
}

function ListItem({ item }) {
  return (
    <Box flexDirection="row" width="100%" height={150} bg="#ddd">
      <ImageBox width={150} source={{ uri: item.img_url }} />
      <Box flex={1} bg="#eee" p={10}>
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
  );
}
