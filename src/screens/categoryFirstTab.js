import React from "react";

import BookList from "../components/book-list";

const DATA = require("../sample-data/librivox_audiobooks_api.json");

export default function CategoryFirstTab({ navigation, route }) {
  // Bu sayfa, başka bir sayfa tarafından parametreler ile birlikte çağrılıyor.
  // BookList component'i bir sayfa olmadığı için navigation objesine direkt erişimi bulunmuyor.
  // Bu sebeple çağrıldığı sayfadaki navigation objesini prop olarak BookList'e aktarıyoruz.

  // Her bir kitabın kategoriler dizisinde, route'dan gelen parametredeki kategorinin olup olmadığı kontrol ediliyor.
  // Bu kategoriyi, kategoriler dizisinde içeren kitaplar ayıklanıyor.
  const filteredDATA = DATA.books.filter((item) =>
    item.genres.includes(route.params.category)
  );
  // Elde edilen filtrelenmiş data ve navigation objesi prop olarak BookList'e aktarılıyor.
  return <BookList data={filteredDATA} navigation={navigation} />;
}
