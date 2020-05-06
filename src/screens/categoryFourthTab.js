import React from "react";

import Lists from "../components/lists";

const DATA = require("../sample-data/home_screen-api.json");

export default function CategoryFourthTab({ navigation, route }) {
  // Bu sayfa, başka bir sayfa tarafından parametreler ile birlikte çağrılıyor.
  // Lists component'i bir sayfa olmadığı için navigation objesine direkt erişimi bulunmuyor.
  // Bu sebeple çağrıldığı sayfadaki navigation objesini prop olarak Lists'e aktarıyoruz.

  // Her bir listenin kategoriler dizisinde, route'dan gelen parametredeki kategorinin olup olmadığı kontrol ediliyor.
  // Bu kategoriyi, kategoriler dizisinde içeren listeler ayıklanıyor.
  const filteredDATA = DATA.lists.filter((item) =>
    item.genres.includes(route.params.category)
  );
  // Elde edilen filtrelenmiş data ve navigation objesi prop olarak Lists'e aktarılıyor.
  return <Lists data={filteredDATA} navigation={navigation} />;
}
