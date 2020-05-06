import React from "react";
import BookList from "../components/book-list";

const DATA = require("../sample-data/listening.json");

export default function LibraryFirstTab({ navigation }) {
  // Dinlenmiş ancak henüz tamamlanmamış kitaplar bu sayfada basılıyor.
  // BookList component'i bir sayfa olmadığı için navigation objesine direkt erişemiyor.
  // Kalıcı kullanıcı datası oluşturulduğunda, bu data kullanılacak.
  // Şimdilik örnek data kullanılıyor.
  // Kullanılacak data ve navigation objesi prop olarak BookList'e aktarılıyor.
  return <BookList data={DATA.books} navigation={navigation} />;
}
