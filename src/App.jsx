import React from "react";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={"Accueil"} />
      <Route path="se-connecter" element={"Connexion"} />
      <Route path="s-inscrire" element={"S'inscrire"} />
      <Route path="*" element={"404"} />

    </Routes>
  );
}
