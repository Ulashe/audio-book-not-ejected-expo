import React from "react";
import BookList from "../components/book-list";

const DATA = require("../sample-data/listened.json");

export default function LibraryThirdTab({ navigation }) {
  // Dinlenmiş ve tamamlanmış kitaplar bu sayfada basılıyor.
  // BookList component'i bir sayfa olmadığı için navigation objesine direkt erişimi bulunmuyor.
  // Kalıcı kullanıcı datası oluşturulduğunda, bu data kullanılacak.
  // Şimdilik örnek data kullanılıyor.
  // Kullanılacak data ve navigation objesi prop olarak BookList'e aktarılıyor.
  return <BookList data={DATA.books} navigation={navigation} />;
}
