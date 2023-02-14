import { useCallback, useState } from "react";
import React from "react";

const Button = React.memo(({ handleClick, name }) => {
    console.log(`botón ${name} renderizado`);
    return <button onClick={handleClick}>{name}</button>;
  });

const Counter = () => {
  console.log(`Counter rendered`);
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const memorizedSetCountOne = useCallback(()=> setCountOne(countOne+1), [countOne])
  const memorizedSetCountTwo = useCallback(()=> setCountTwo(countTwo+1), [countTwo]) 

  return (
    <div>
      {countOne} {countTwo}
      <Button handleClick={memorizedSetCountOne} name="Botón 1" />
      <Button handleClick={memorizedSetCountTwo} name="Botón 2" />
    </div>
  );
};


export default Counter