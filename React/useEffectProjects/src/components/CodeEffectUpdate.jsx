import { useState, useEffect } from "react";

const CodeEffectUpdate = () => {
  const [myInfo, setMyInfo] = useState({
    name: "Peter",
    lastName: "Parker",
  });

  useEffect(() => {
    console.log("Llamada después de cada render");

    return () => console.log("Desmonto el componente");
  }, []);

  return <div>

<h4>{myInfo.name} {myInfo.lastName}</h4>
<input type="text" value= {myInfo.name} onChange= {(e) =>setMyInfo({...myInfo, name:e.target.value})}/>
<input type= "text" value ={myInfo.lastName} onChange= {(e) => setMyInfo({...myInfo, lastName:e.target.value})}/>

  </div>;
};

export default CodeEffectUpdate;
