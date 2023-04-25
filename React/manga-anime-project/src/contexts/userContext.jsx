import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const hello = "hola"
  const [user, setUser] = useState(()=>{
  const savedUser = window.localStorage.getItem('user');

  
  } 
  );

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
    
  };
  const login = (data) => {
    console.log()
    setUser(data);
    localStorage.setItem("user", data.toString());
    navigate("/anime")
  };

  return <UserContext.Provider value={{ user, hello, setUser, login, logout }}>{children}</UserContext.Provider>;
};
export const userAuth = () => {
  return useContext(UserContext);
};
