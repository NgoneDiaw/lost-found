import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { ProductService } from "./service/ProductService";

export default function TemplateDemo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageBodyTemplate = (product) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
        alt={product.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  const ratingBodyTemplate = (product) => {
    return <Rating value={product.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (product) => {
    return (
      <Tag
        value={product.inventoryStatus}
        severity={getSeverity(product)}
      ></Tag>
    );
  };

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "PERDU":
        return "danger";

      case "TROUVÉ":
        return "success";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">État des objets</span>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );
  const footer = `${
    products ? products.length : 0
  } objets au total.`;

  return (
    <div className=" flex-1 p-3">
      <div className="card">
        <DataTable
          value={products}
          header={header}
          footer={footer}
          tableStyle={{ minWidth: "60rem" }}
          paginator
          rows={5}
        >
          <Column field="category" header="Catégories"></Column>
          <Column field="name" header="Marques"></Column>
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column header="Status" body={statusBodyTemplate}></Column>
          <Column header="Lieu" field="loc"></Column>
          <Column body={(product) => {
            return (<Button label="Désactiver"></Button>)
          }}></Column>
        </DataTable>
      </div>
    </div>
  );
}
