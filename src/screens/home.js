import React from "react";

import Lists from "../components/lists";

const DATA = require("../sample-data/home_screen-api.json");

export default function HomeScreen({ navigation }) {
  // Tüm listeler bu sayfada basılıyor. Daha sonra bu durum değişebilir.
  // Lists component'i bir sayfa olmadığı için  navigation objesine direkt olarak erişimi bulunmuyor.
  // Kullanılacak data ve navigation objesi prop olarak Lists'e aktarılıyor.
  return <Lists data={DATA.lists} navigation={navigation} />;
}
