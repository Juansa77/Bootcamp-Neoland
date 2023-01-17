import { useState } from "react";
import { useEffect } from "react";

const charactersMock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
  },
];

const RickMorty = () => {
  const [charactersArray, setCharactersArray] = useState([]);

  useEffect(() => {
    (async () => {
      let raw = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (result) => result.json()
      );

      setCharactersArray(raw.results);
    })();
  });

  return (
    <div>
      {charactersArray.map((element) => (
        <div className="CharacterContainer">
          <img src={element.image} />,<h1 key={element.id}>{element.name}</h1>,
          <h3 key={element.status}>{element.status}</h3>
        </div>
      ))}
    </div>
  );
};

export default RickMorty;
