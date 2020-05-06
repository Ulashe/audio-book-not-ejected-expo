import React from "react";
import { TouchableOpacity } from "react-native";

import { Box, TextBox, ImageBox } from "../components/styled-components";

const DATA = require("../sample-data/librivox_audiobooks_api.json");

export default function BookDetail({ navigation, route }) {
  // Bu sayfa, başka bir sayfa tarafından parametreler ile birlikte çağrılıyor.

  // route'dan gelen parametredeki id ile aynı id'ye sahip olan kitabı buluyoruz.
  const item2 = DATA.books.filter((item) => item.id == route.params.id)[0];
  // Elde edilen kitap bilgisini render component'ine gönderiyoruz.
  // DİKKAT!!! Bu sayfa henüz geliştirilme aşamasındadır.
  // Fonksiyonların çalışmasını test etmek amacıyla geçici bir render component kullanılmıştır.
  return <ListItem item={item2} />;
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
