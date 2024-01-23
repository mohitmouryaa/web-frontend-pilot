import React from 'react';
import DoctorTable from './DoctorTable';
export default function AppointmentTable({ customColumnBody }) {
  return (
    <div className="my-6">
      <h3>Past Appointments</h3>
      <DoctorTable {...{ customColumnBody }} />
    </div>
  );
}
