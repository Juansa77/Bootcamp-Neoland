import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext} from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const ID = localStorage.getItem("user");
    return ID ? ID : null;
  });
  const navigate = useNavigate();

  const login = (user) => {
    localStorage.setItem("user", user);
    setUser(user);
    navigate("/noticias");
  };

  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null)
  };
  return (
    <UserContext.Provider value={{ user, login, logOut, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
