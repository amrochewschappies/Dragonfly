import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchBar() {
  const { setIsSearching, setSearchInput } =
    useContext(SearchContext);

  return (
    <input
      type="text"
      autocomplete="off"
      placeholder="search"
      id="search-bar"
      onChange={(event) => {
        if (event.target.value != "") {
          setIsSearching(true);
          setSearchInput(event.target.value);
        }
        else{
          setIsSearching(false)
          setSearchInput("");
        }
      }}
    />
  );
}

export default SearchBar;
