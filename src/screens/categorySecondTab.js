import React from "react";

import BookList from "../components/book-list";

const DATA = require("../sample-data/librivox_audiobooks_api.json");

export default function CategorySecondTab({ navigation, route }) {
  const filteredDATA = DATA.books.filter((item) =>
    item.genres.includes(route.params.category)
  );
  return <BookList data={filteredDATA} navigation={navigation} />;
}
