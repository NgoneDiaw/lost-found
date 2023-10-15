import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login.jsx/Login";
import SignIn from "./pages/SignIn.jsx/SignIn";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={"Accueil"} />
      <Route path="se-connecter" element={<Login />} />
      <Route path="s-inscrire" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
