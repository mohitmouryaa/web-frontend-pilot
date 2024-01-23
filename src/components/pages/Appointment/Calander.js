import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Avatar } from 'primereact/avatar';
import AppointmentModal from './AppointmentVideo/AppointmentModal';
import './../../../styles/appointment.scss';

export default function CalanderComponent() {
  const [date, setDate] = useState(null);

  return (
    <>
      <div className="card flex justify-content-center mb-5 shadow-4 border-round-sm">
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value)}
          inline
          // yearNavigator={true}
          monthNavigator
          showButtonBar
        />
      </div>
      <div className="card shadow-4 flex justify-content-between align-items-center p-4 border-round-sm mb-4">
        <div className="flex gap-4 text-500">
          <div className="font-semibold text-2xl">14</div>
          <div>
            <div>December 2016</div>
            <div>Monday</div>
          </div>
        </div>
        <Avatar label="V" size="large" shape="circle" className="bg-cyan-300" />
      </div>
      <AppointmentModal />
    </>
  );
}
