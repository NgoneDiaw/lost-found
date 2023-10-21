import React, { useState } from "react";
import "./style.scss";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Admin() {
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();
  return (
    <div className="flex">
      <aside className="bg-primary p-2 flex-1 max-w-16rem h-screen sticky">
        <h2>Lost Found</h2>

        <a
          onClick={() => {
            navigate("/admin/");
            setActive("dashboard");
          }}
          className={active == "dashboard" ? "active" : ""}
        >
          <i className="pi pi-home"></i> Dashboard
        </a>
        <a
          onClick={() => {
            navigate("/admin/utilisateurs");
            setActive("users");
          }}
          className={active == "users" ? "active" : ""}
        >
          <i className="pi pi-users"></i> Abonnés
        </a>
        <a
          onClick={() => {
            navigate("/admin/objets");
            setActive("objects");
          }}
          className={active == "objects" ? "active" : ""}
        >
          <i className="pi pi-box"></i> Objets
        </a>
        <a
          onClick={() => {
            navigate("/admin/commentaires");
            setActive("comments");
          }}
          className={active == "comments" ? "active" : ""}
        >
          <i className="pi pi-comment"></i> Commentaires
        </a>
        <a onClick={() => navigate('/')}>
          <i className="pi pi-power-off"></i> Déconnexion
        </a>
      </aside>
      <main className="flex-1 flex flex-column min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
