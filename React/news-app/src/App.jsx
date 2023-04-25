import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useOutletContext,
} from "react-router-dom";
import Home from "./components/Home";
import Deportes from "./components/Deportes";
import Economia from "./components/Economia";
import Noticias from "./components/Noticias";
import Tecnologia from "./components/Tecnologia";
import NavBar from "./components/NavBar/NavBar";
import { UserContextProvider } from "../contexts/userContext";
import Detail from "./components/Detail";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";
import ProtectedRoute from "./components/protectedRoute";

import "./App.css";

function App() {

  const {user} = useContext(UserContext)
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/deportes" element={<ProtectedRoute><Deportes /></ProtectedRoute>} />
            <Route path="/noticias/economia" element={<Economia />} />
            <Route path="/noticias/tecnologia" element={<Tecnologia />} />
            <Route path="/noticias/sport/:newsID" element={<Detail />} />
            <Route path="/noticias/economy/:newsID" element={<Detail />} />
            <Route path="/noticias/tecnology/:newsID" element={<Detail />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>404</h1>
                  <p>La página no existe</p>
                </div>
              }
            />
            {/*<Route
            path="/*"
            element={
              <div>
                <b>
                  <h1>ERROR 404</h1>
                </b>
                <p>Página no encontrada</p>
              </div>
            }
          />*/}
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
