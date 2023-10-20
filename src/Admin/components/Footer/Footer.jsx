import React from "react";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";

export default function Footer() {
  return (
    <footer className="bg-primary p-3">
      <div className="flex justify-content-between">
        <div>
          <Button icon={"pi pi-instagram"} />
          <Button icon={"pi pi-facebook"} />
          <Button icon={"pi pi-twitter"} />
          <Button icon={"pi pi-google"} />
        </div>
        <div>
          <Button label="contact@lost-found.com" />
        </div>
      </div>
      
      <span className="font-bold flex gap-2">
        <span>
          Lost <i className="pi pi-search"></i> Found
        </span>
        <span className="flex-1">
          <hr />
        </span>
      </span> <br />
      <div className="w-full text-center mb-3">www.lost-found.com</div>
    </footer>
  );
}
