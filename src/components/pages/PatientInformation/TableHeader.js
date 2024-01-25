import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function TableHeader() {
  return (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between px-5">
      <h2 className="m-0">All Patients</h2>
      <div className="flex gap-3 align-items-center">
        <span className="p-input-icon-right">
          <i className="pi pi-search" />
          <InputText placeholder="Search" className="p-inputtext-sm " 
          pt={{root:{className:"border-round-3xl"}}}
          />
        </span>
      </div>
    </div>
  );
}
