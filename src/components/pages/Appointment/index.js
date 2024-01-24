import React from 'react';
import DoctorTable from './DoctorTable';
import CalanderComponent from './Calander';
import AppointmentTable from './AppointmentTable';
import { Avatar } from 'primereact/avatar';

export default function Appointement() {
  const customColumnBody = (rowData, data) => {
    const { field } = data;
    switch (field) {
      case 'doctor':
        return (
          <div className="flex align-items-center gap-2 mr-3">
            <Avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              shape="circle"
            />
            <div>{rowData?.[data?.field] || '-'}</div>
          </div>
        );
      default:
        return <div>{rowData?.[data?.field] || '-'}</div>;
    }
  };

  return (
    <div className="flex justify-content-between gap-8 p-4">
      <div className="flex-1">
        <DoctorTable
          {...{
            customColumnBody,
          }}
        />
        <AppointmentTable
          {...{
            customColumnBody,
          }}
        />
      </div>
      <div>
        <CalanderComponent />
      </div>
    </div>
  );
}
