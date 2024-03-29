import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Movies from "./components/Movies";
import Review from "./components/Review";

function App() {

  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Movies
        title="Guardianes de la Galaxia"
        poster="https://m.media-amazon.com/images/I/61-ndDQWTdL._AC_.jpg"
      />

      <hr />
      <label>Cambia tu puntuación</label>
      <br />

      <input
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.valueAsNumber)}
      />

<Review
        title="La he disfrutado muchísimo, siempre es un placer ver a los guardianes en acción"
        score={score}
      />
    </div>
  );
}

export default App;
