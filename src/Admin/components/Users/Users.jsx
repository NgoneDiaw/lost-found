import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function Users() {
  const data = [
    {
      name: "Ngoné",
      lname: "DIAW",
      email: "ngone12@gmail.com",
      phone: "12345678",
      address: "Touba extenstion",
    },
    {
      name: "Safiétou",
      lname: "BADJI",
      email: "safy234@gmail.com",
      phone: "12345678",
      address: "Kaolack",
    },
    {
      name: "Khadim",
      lname: "FALL",
      email: "khadimlefa000@gmail.com",
      phone: "12345678",
      address: "Mbour",
    },
  ];
  return (
    <div className="flex-1 p-3">
      <h1>Abonnés</h1>
      <DataTable paginator rows={10} value={data}>
        <Column header="Prénom" field="name" />
        <Column header="Nom" field="lname" />
        <Column header="Email" field="email" />
        <Column header="Téléphone" field="phone" />
        <Column header="Adresse" field="address" />
        <Column
          body={() => {
            return (
              <div className="flex gap-3">
                <Button label="Activer" severity="success" />
                <Button label="Désactiver" severity="danger" />
              </div>
            );
          }}
        />
      </DataTable>
    </div>
  );
}
