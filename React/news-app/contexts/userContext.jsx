import React from "react";
import { createContext, useState, useEffect } from "react";

//Creamos el contexto: es aqui de donde sacamos los valores
export const UserContext = createContext();

//Aquí definimos los valores que vamos a meter en userContext
export const UserContextProvider = ({ children }) => {
  //Inicializamos user y lo seteamos, cargamos el Usestate en Lazy; para que la función solo se renderice una vez y después sea el estado (local staorage es algo costoso)
  const [user, setUser] = useState(localStorage.getItem("user", null));

  const login = async (user) => {
    setUser(user);
    localStorage.setItem("user", user);
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };


  //Vamos a poner aquí la searchbar

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
    }
    else{setFilteredResults(data)}
  };



  return (
    <UserContext.Provider value={{ user, setUser, login, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
