import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Read from "./components/HOBBIES/Read";
import { HOBBIES } from "./components/HOBBIES/hobbies";
import Movies from "./components/HOBBIES/Movies";
import Languages from "./components/HOBBIES/languages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      <Read data={HOBBIES}/>
      <Movies data={HOBBIES}/>
      <Languages data={HOBBIES}/>
    </App>
  </React.StrictMode>
);
