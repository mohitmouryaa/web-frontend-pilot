import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import { Image } from 'primereact/image';

export default function AppointmentModal() {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const header = (
    <Image src="/img/logo.svg" alt="Image" height="40" className="mr-2" />
  );
  const footer = (
    <React.Fragment>
      <div>
        <Button label="Cancel" outlined onClick={() => setVisible(false)} />
        <Button
          style={{ color: '#4b4a4a' }}
          label="Book"
          onClick={() => setVisible(false)}
        />
      </div>
    </React.Fragment>
  );
  return (
    <div className="card flex justify-content-center">
      <Button
        label="Book an Appointment"
        className="w-full bg-cyan-300 border-none"
        onClick={() => {
          setVisible(true);
        }}
      />
      <Dialog
        id="appointmentModalDialog"
        header={header}
        visible={visible}
        style={{ width: '100vw', minHeight: '100%' }}
        onHide={() => setVisible(false)}
        footer={footer}
      >
        <div className="text-center font-semibold text-4xl mt-4">
          Dr. Alec's Availability
        </div>
        <div className="card flex justify-content-center">
          <div>
            <Calendar
              value={date}
              onChange={(e) => setDate(e.value)}
              inline
              showWeek
              style={{ width: '35vw' }}
            />
          </div>
          <div className='ml-6'>
            <Calendar
              inputId="selectHour"
              value={time}
              onChange={(e) => setTime(e.value)}
              timeOnly
              inline
              hourFormat="12"
              style={{ width: '13vw' }}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
