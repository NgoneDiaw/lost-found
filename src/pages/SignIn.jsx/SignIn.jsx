import React from "react";
import "./signin-style.scss";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="hero h-screen flex align-items-center justify-content-center p-3">
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
          <h1>S'inscrire</h1>
        </div>
        <form className="flex flex-column gap-3 mb-3">
          <span className="p-input-icon-left w-full">
            <i className="pi pi-user" />
            <InputText placeholder="Prénom" className="w-full" />
          </span>
          <span className="p-input-icon-left w-full">
            <i className="pi pi-user" />
            <InputText placeholder="Nom de famille" className="w-full" />
          </span>
          <span className="p-input-icon-left w-full">
            <i className="pi pi-envelope" />
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
          <span className="p-input-icon-left w-full">
            <i className="pi pi-lock" />
            <InputText
              placeholder="Confirmer votre mot de passe"
              type="password"
              className="w-full"
            />
          </span>
          <Button label="S'inscrire" icon={"pi pi-sign-in"} />
        </form>
        <span>
          Vous avez déjà un compte?{" "}
          <Link
            to={"/se-connecter"}
            className=" text-blue-500 hover:text-blue-400"
          >
            Se connecter
          </Link>{" "}
        </span>
      </Card>
    </div>
  );
}
