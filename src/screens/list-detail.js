import React from "react";

import BookList from "../components/book-list";

const BookDATA = require("../sample-data/librivox_audiobooks_api.json");
const ListDATA = require("../sample-data/home_screen-api.json");

export default function ListDetail({ navigation, route }) {
  // Bu sayfa, başka bir sayfa tarafından parametreler ile birlikte çağrılıyor.
  // BookList component'i bir sayfa olmadığı için navigation objesine direkt erişimi bulunmuyor.
  // Bu sebeple çağrıldığı sayfadaki navigation objesini prop olarak BookList'e aktarıyoruz.

  // route'dan gelen parametredeki id ile aynı id'ye sahip olan listeyi buluyoruz.
  const filteredList = ListDATA.lists.filter(
    (item) => item.id == route.params.id
  );
  // Elde ettiğimiz list'deki kitapların id'lerini bir array'e atıyoruz.
  const filteredListItemIds = filteredList[0].list.map((item) => item.id);
  // Elde ettiğimiz id'leri kullanarak genel kitap data'sını filtreliyoruz.
  const filteredBookDATA = BookDATA.books.filter((item) =>
    filteredListItemIds.includes(item.id)
  );
  // Son olarak, render component'ine(BookList) basacağı data'yı gönderiyoruz.
  // Böylece bütün kontrolü bu sayfada yaptık.
  // render component'i sadece görevli olduğu şeyi yapıyor.
  return <BookList data={filteredBookDATA} navigation={navigation} />;
}
