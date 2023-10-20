import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Users() {
  const data = [
    {
      name: "Ngoné DIAW",
      email: "ngone12@gmail.com",
    },
    {
      name: "Safiétou BADJI",
      email: "safy234@gmail.com",
    },
    {
      name: "Khadim FALL",
      email: "khadimlefa000@gmail.com",
    },
  ];
  return (
    <div className="flex-1 p-3">
      <h1>Utilisateurs</h1>
      <DataTable editMode="row" value={data}>
        <Column header="Nom" field="name" />
        <Column header="Email" field="email" />
        <Column header="Email" field="email" />
        <Column rowEditor />
      </DataTable>
    </div>
  );
}
