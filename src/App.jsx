import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login.jsx/Login";
import SignIn from "./pages/SignIn.jsx/SignIn";
import Home from "./pages/Home/Home";
import Lost from "./pages/Lost/Lost";
import Found from "./pages/Found/Found";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/declarer-un-objet-perdu" element={<Lost />} />
      <Route path="/signaler-un-objet-trouve" element={<Found />} />
      <Route path="se-connecter" element={<Login />} />
      <Route path="s-inscrire" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
