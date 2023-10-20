import React from "react";
import Header from "./components/Header/Header";
import { Button } from "primereact/button";
import lost from "./assets/lost.png";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import Footer from "./components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className="">
        <section className="m-auto mt-5 flex flex-column-reverse md:flex-row">
          <div className="md:col-6 p-3 flex flex-column justify-content-center">
            <h1 className="text-5xl">
              Un objet perdu se transforme souvent en objet trouvé!
            </h1>
            <h2>
              Vous avez perdu ou trouvé un objet? Déclarez-le et la communauté
              se mobilise pour vous aider à le retrouver.
            </h2>
            <div className="flex flex-column md:flex-row gap-3 w-full ">
              <Button
                className="w-full"
                icon={"pi pi-search"}
                label="Déclarer un objet perdu"
                onClick={() => navigate('/declarer-un-objet-perdu')}
              />
              <Button
                className="w-full"
                icon={"pi pi-megaphone"}
                label="Signaler un objet trouvé"
                onClick={() => navigate('/signaler-un-objet-trouve')}
                outlined
              />
            </div>
          </div>
          <div className="md:col-6 p-3 hidden md:flex flex-column justify-content-center flex-1">
            <img src={lost} className="w-full border-round-xl " />
          </div>
        </section>
        <div className="bg-primary">
          <section className="m-auto mt-5 grid pt-5 px-3">
            <h2 className="text-center w-full text-4xl">
              COMMENT LOST-FOUND VOUS AIDE?
            </h2>
            <p className="w-full text-center">
              Trop facile de trouver un objet
            </p>
            <div className="m-auto mt-5 flex flex-column md:flex-row gap-3 lg:gap-5">
              <div className="flex-1 mb-5">
                <i className="text-5xl pi pi-megaphone w-full text-center"></i>
                <h2 className="w-full text-center">
                  Déclarer un objet perdu ou signaler un objet trouvé
                </h2>
                <p className="text-center">
                  Remplissez le formulaire de déclaration en donnant un maximum
                  de détails (sur le lieu de perte, le type de l’objet, sa
                  description, sa photo) pour aider l’algorithme à l’identifier rapidement
                </p>
              </div>
              <div className="flex-1 mb-5">
                <i className="text-5xl pi pi-bookmark w-full text-center"></i>
                <h2 className="w-full text-center">
                  Prouvez la propriété de votre objet
                </h2>
                <p className="text-center">
                  Pour prouver la propriété de l’objet, un lot d’images vous
                  sera fourni puis vous choisissez celle correspondante à votre
                  objet.
                </p>
              </div>
              <div className="flex-1 mb-5">
                <i className="text-5xl pi pi-check w-full text-center"></i>
                <h2 className="w-full text-center">Récupérez-le !</h2>
                <p className="text-center">
                  Dès que vous êtes authentifié, vous serez contacté par celui
                  qui l’a ramassé pour des informations concernant la
                  récupération de l’objet
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="m-auto p-3 mb-5">
          <h2 className="text-center w-full text-4xl">
            Laissez nous un commentaire
          </h2>
          <form>
            <div className="flex flex-column md:flex-row gap-3 mb-3">
              <InputText placeholder="Prénom" className="flex-1" />
              <InputText placeholder="Nom de famille" className="flex-1" />
            </div>
            <div className="flex flex-column md:flex-row gap-3 mb-3">
              <InputText placeholder="Email" type="email" className="flex-1" />
              <InputText
                placeholder="Téléphone"
                type="tel"
                className="flex-1"
              />
            </div>
            <div className="flex flex-column md:flex-row gap-3 mb-3">
              <InputTextarea
                placeholder="Votre commentaire ou message"
                className="flex-1"
              />
            </div>
            <div className="flex flex-column md:flex-row gap-3 mb-3 justify-content-center ">
              <Button
                label="Envoyer"
                icon="pi pi-send"
                className="flex-1 md:max-w-fit"
                type="submit"
              />
              <Button
                label="Effacer"
                icon="pi pi-eraser"
                className="flex-1 md:max-w-fit"
                type="reset"
                outlined
              />
            </div>
          </form>
        </section>
        <Footer />
      </main>
    </>
  );
}
