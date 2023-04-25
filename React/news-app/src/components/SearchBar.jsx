import React from "react";
import { useState } from "react";

const SearchBar = (data) => {
  const [searchInput, setSearchinput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  //SearchValue es el valor del input. Si el valor del Input no está vacio, hace un filter y crea un array con los valores que coincidan. Si está vacio, ese array será igual que data
  const searchItems = (searchValue) => {
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
  };
  return filteredResults
};

export default SearchBar;
