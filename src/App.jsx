import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login.jsx/Login";
import SignIn from "./pages/SignIn.jsx/SignIn";
import Home from "./pages/Home/Home";
import Lost from "./pages/Lost/Lost";
import Found from "./pages/Found/Found";
import Admin from "./Admin/Admin";
import Dashboard from "./Admin/components/Dashboard";
import Users from "./Admin/components/Users/Users";
import Objects from "./Admin/components/Objects/Objects";
import Comments from "./Admin/components/Comments/Comments";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/declarer-un-objet-perdu" element={<Lost />} />
      <Route path="/signaler-un-objet-trouve" element={<Found />} />
      <Route path="se-connecter" element={<Login />} />
      <Route path="s-inscrire" element={<SignIn />} />
      <Route path="admin" element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path="utilisateurs" element={<Users />} />
        <Route path="objets" element={<Objects />} />
        <Route path="commentaires" element={<Comments />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
