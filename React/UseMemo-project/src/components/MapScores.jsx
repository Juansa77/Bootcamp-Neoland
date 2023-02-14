import { useState, useMemo } from "react";

const numberArray = [1, 2, 1, 4, 0, 6];

const MapScores = (scores, caller) => {
  console.log(`Invocamos mapScores=>`, caller);

  return scores.map((number, index) => {
    const calc = (number * 3) / 2;
    const color = calc < 3 ? `🔴` : `🟢`;

    return (
      <p key={index}>
        {calc} {color}
      </p>
    );
  });
};

const BasicUseMemo = () => {
  const [rerender, setRender] = useState(false);
  const marksContent = MapScores(numberArray, `no-memo`);

  const marksContentMemo = useMemo(() => {
    return MapScores(numberArray, `memo`);
  }, []);

  return (
    <div className="rows">
      <div>
        <h3>No memo</h3>
        {marksContent}

        <div>
          <h3>Usando memo</h3>
          {marksContentMemo}
        </div>
      </div>

      <button onClick={()=> setRender(!rerender)}>ReRender</button>
    </div>
  );
};

export default BasicUseMemo;
