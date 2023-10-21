import React, { useState } from "react";
import Header from "../Home/components/Header/Header";
import Footer from "../Home/components/Footer/Footer";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { FileUpload } from "primereact/fileupload";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";

export default function Found() {
  const options = ["J'ai trouvé", "J'ai perdu"];
  const [value, setValue] = useState(options[0]);
  return (
    <>
      <Header />
      <main className="p-3 min-h-screen">
        <section>
          <div className="h-full">
            <form className="grid m-auto">
              <div className="col-12">
                <h1 className="text-4xl">Signaler un objet</h1>
              </div>
              <div className="col-12">
                <SelectButton
                  value={value}
                  onChange={(e) => setValue(e.value)}
                  options={options}
                  className="flex gap-3"
                />
              </div>
              <h2 className="col-12">Comment vous joindre?</h2>
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
              <h2 className="col-12">Information sur l'objet</h2>
              <div className="md:col-6 flex flex-column gap-2 mb-3">
                <label>De quel objet sagit-il?</label>
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
                <label>À quel date?</label>
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
                        Ajoutez une image de l'objet ici
                      </span>
                    </div>
                  }
                />
              </div>
              <div className="col-12 text-center">
                <Button icon={"pi pi-search"} label="Signaler l'objet" />
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
