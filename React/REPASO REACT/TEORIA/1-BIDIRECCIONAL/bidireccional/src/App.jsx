import { useState } from "react";
import "./App.css";
import { ButtonState } from "./components/ButtonState";

function App() {
  const [count, setCount] = useState(0);
//En este ejemplo, count se encuentra en el componente padre, pero se activa desde el componente hijo al hacer el onclick desde el hijo.
  return (
    <>
      <h1>Count is {count}</h1>
      {console.log(count)}
      <div className="card">
        <ButtonState setter={setCount}>Cambia el estado</ButtonState>
      </div>
    </>
  );
}

export default App;
