import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import useError from "./Hooks/useError";


function App() {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState(0);

//? Para controlar errores y notificaciones, vamos a usar el Hook useError dentro del useEffect


useEffect(() => {
  useError(count);
}, [count]);


  const countHandler = () => {
    setCount((value) => {
      //?aquí si tenemos acceso al valor actualizado porque hemos sacado value del usestate
      const counter = value + 1;
      console.log(counter);
      return counter;
    });
    //?En este console no tenemos acceso al valor actualizado
    console.log(count);
  };

  const helloHandler = () => {
    setHello((value) => {
      return value + 1;
    });
  };

  //? Para tener acceso al valor actualizado de un state cada vez que se actualiza, con aray de dependencias del valor que queremos seguir
  useEffect(() => {
    //? este console.log siempre saldra al montaje del componente
    console.log("Count actualizado", count);
  }, [count]);

  //? si queremos sacar el desmontaje del componente, debemos añadir un return en el useEffect, solo se hará una vez ya que el array está vacio


  useEffect(()=>{
    console.log("me monto")
    return ()=> console.log("me desmonto")
  },[])
  //? si no hay array de dependencias, saltará cada vez que se actualice
  useEffect(() => {
    console.log("me actualizo");
  });


  return (
    <>
      <button onClick={countHandler}>Count is {count}</button>
      <button onClick={helloHandler}>Hello is {hello}</button>
    </>
  );
}

export default App;
