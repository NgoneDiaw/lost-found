import React from "react";
import Header from "../Home/components/Header/Header";
import Footer from "../Home/components/Footer/Footer";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { FileUpload } from "primereact/fileupload";
import { Button } from "primereact/button";

export default function Lost() {
  return (
    <>
      <Header />
      <main className="p-3 min-h-screen">
        <section>
          <h1 className="text-4xl text-center">Déclarer un objet perdu</h1>
          <div className="h-full">
            <form className="grid m-auto">
              <h2 className="col-12">Information sur le propriétaire</h2>
              <div className="md:col-6 flex flex-column gap-2 mb-3">
                <label>Comment vous appelez vous?</label>
                <InputText />
              </div>
              <div className="md:col-6 flex flex-column gap-2 mb-3">
                <label>Votre numéro de téléphone</label>
                <InputText />
              </div>
              <div className="md:col-6 flex flex-column gap-2 mb-3">
                <label>Votre email</label>
                <InputText />
              </div>
              <div className="md:col-6 flex flex-column gap-2 mb-3">
                <label>Votre adresse</label>
                <InputText />
              </div>
              <h2 className="col-12">Information sur l'objet perdu</h2>
              <div className="md:col-6 flex flex-column gap-2 mb-3">
                <label>Qu'avez vous perdu?</label>
                <InputText />
              </div>
              <div className="md:col-6 flex flex-column gap-2 mb-3">
                <label>Quelle est sa couleur?</label>
                <InputText />
              </div>
              <div className="md:col-6 flex flex-column gap-2 mb-3">
                <label>Quelle est sa marque?</label>
                <InputText />
              </div>
              <div className="md:col-6 flex flex-column gap-2 mb-3">
                <label>À quel date l'avez vous perdu?</label>
                <Calendar dateFormat="dd/mm/yy" showTime />
              </div>
              <div className="md:col-12 flex flex-column gap-2 mb-3">
                <label>Une image de l'objet?</label>
                <FileUpload
                  emptyTemplate={
                    <div className="flex align-items-center flex-column">
                      <i
                        className="pi pi-image mt-3 p-5"
                        style={{
                          fontSize: "5em",
                          borderRadius: "50%",
                          backgroundColor: "var(--surface-b)",
                          color: "var(--surface-d)",
                        }}
                      ></i>
                      <span
                        style={{
                          fontSize: "1.2em",
                          color: "var(--text-color-secondary)",
                        }}
                        className="my-5"
                      >
                        Ajoutez une image de l'objet perdu ici
                      </span>
                    </div>
                  }
                />
              </div>
              <div className="col-12 text-center">
                <Button icon={"pi pi-search"} label="Déclarez l'objet perdu" />
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
