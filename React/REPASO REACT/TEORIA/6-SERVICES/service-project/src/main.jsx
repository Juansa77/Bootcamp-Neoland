import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CheckCode from "./pages/CheckCode.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyCode" element={<CheckCode />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
