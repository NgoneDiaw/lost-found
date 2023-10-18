import React from "react";
import "./login-style.scss";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div id="heroStyle" className="hero h-screen flex align-items-center justify-content-center p-3">
      <Card className="formCard">
        <div className=" flex flex-column align-items-center">
          <Link to={"/"}>
            <img
              src="/logo.png"
              alt="logo"
              className="m-auto cursor-pointer"
              height={"100px"}
            />
          </Link>
          <h1>Se connecter</h1>
        </div>
        <form className="flex flex-column gap-3 mb-3">
          <span className="p-input-icon-left w-full">
            <i className="pi pi-user" />
            <InputText placeholder="Email" className="w-full" />
          </span>
          <span className="p-input-icon-left w-full">
            <i className="pi pi-lock" />
            <InputText
              placeholder="Mot de passe"
              type="password"
              className="w-full"
            />
          </span>
          <Button label="Se connecter" icon={"pi pi-sign-in"} />
        </form>
        <span>
          Vous ne disposez pas de compte?{" "}
          <Link
            to={"/s-inscrire"}
            className=" text-blue-500 hover:text-blue-400"
          >
            Inscrivez-vous
          </Link>{" "}
        </span>
      </Card>
    </div>
  );
}
