import { useState, createContext } from "react";
import Component2 from "./Component2";

export const UserContext = createContext()



const ComponentOne = () => {
  const [user, setUser] = useState("Juansa García");

  return (
  
  <div>
  <UserContext.Provider value={user}>
  <h1>{`Hello ${user}`}</h1>
  <Component2 user={user}/>
  </UserContext.Provider>
  </div>
  
  )

};

export default ComponentOne
