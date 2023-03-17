import React from 'react'
import { useState } from 'react';

const SearchBar = (data, searchValue, searchInput, setSearchinput, setFilteredResults) => {
  setSearchinput(searchValue);

  if (searchInput !== "") {
    const filteredData = data.filter((element) => {
      return Object.values(element)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
  } else {
    setFilteredResults(data);
  }
}

export default SearchBar