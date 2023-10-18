import React, { useRef, useState } from "react";
import { Menubar } from "primereact/menubar";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  //Navigation
  const navigate = useNavigate();

  //State de connexion
  const [isLogged, setIsLoggedIn] = useState(false);

  //Block menu
  const start = (
    <div className="flex align-items-center gap-2">
      <img src="/logo.png" height={"40px"} />
      <span className="hidden md:block font-bold">
        Lost <i className="pi pi-search"></i> Found
      </span>
    </div>
  );

  const menuProfil = useRef(null);
  const menuProfilItems = [
    { label: "Mon espace", icon: "pi pi-home", command: () => {} },
    {
      label: "Modifier mon mot de passe",
      icon: "pi pi-lock",
      command: () => {},
    },
    { label: "Se deconnecter", icon: "pi pi-power-off", command: () => {} },
  ];
  const end = isLogged ? (
    <div>
      <Menu
        model={menuProfilItems}
        popup
        ref={menuProfil}
        id="popup_menu_profil"
        popupAlignment="right"
      />
      <Button
        label="Mon compte"
        icon={"pi pi-user"}
        onClick={(event) => menuProfil.current.toggle(event)}
        aria-controls="popup_menu_profil"
        aria-haspopup
      />
    </div>
  ) : (
    <div>
      <Button label="Se connecter" icon={"pi pi-sign-in"} onClick={() => navigate('/se-connecter')} />
    </div>
  );

  return (
    <header>
      <Menubar start={start} end={end} />
    </header>
  );
}
