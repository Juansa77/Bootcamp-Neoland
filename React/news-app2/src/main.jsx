import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./contexts/userContext";
import Home from "./pages/Home";
import Deportes from "./pages/Deportes";
import Detail from "./pages/Detail";
import Economia from "./pages/Economia";
import Noticias from "./pages/Noticias";
import Tecnologia from "./pages/Tecnologia";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Title from "./components/Title";
import DateSystem from "./components/Date";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <DateSystem />
        <Title />
        <NavBar />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="/noticias"
              element={
                <ProtectedRoute>
                  <Noticias />
                </ProtectedRoute>
              }
            />
            <Route
              path="/noticias/deportes"
              element={
                <ProtectedRoute>
                  <Deportes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/noticias/economia"
              element={
                <ProtectedRoute>
                  <Economia />
                </ProtectedRoute>
              }
            />
            <Route
              path="/noticias/tecnologia"
              element={
                <ProtectedRoute>
                  <Tecnologia />
                </ProtectedRoute>
              }
            />
            <Route
              path="/noticias/sport/:newsID"
              element={
                <ProtectedRoute>
                  <Detail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/noticias/economy/:newsID"
              element={
                <ProtectedRoute>
                  <Detail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/noticias/tecnology/:newsID"
              element={
                <ProtectedRoute>
                  <Detail />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <div>
                  <h1>404</h1>
                  <p>La página no existe</p>
                </div>
              }
            />
          </Route>
        </Routes>
        <Footer/>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
