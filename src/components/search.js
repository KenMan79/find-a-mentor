import React from "react";

import Input from "./input";

import "./search.css";

const Search = () => (
  <aside>
    <h1 className="search__filter">Filter</h1>
    <section className="search__content">
      <Input label="Language / Technology" id="technology" />
      <Input label="Location" id="location" />
    </section>
  </aside>
);

export default Search;
