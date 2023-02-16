import { useContext } from "react";
import { UserContext } from "./ComponentoOne";

const Component5 = () => {
    
  const user =useContext(UserContext)
  return( 
    
    <div>
   <h1>Component 5</h1>
  <h2>{`Hello ${user} again!!`}</h2>
    </div>

    )
  };
  
  export default Component5;
  