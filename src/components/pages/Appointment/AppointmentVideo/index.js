import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { Image } from 'primereact/image';
import React from 'react';
import ChatCard from '../ChatCard';

export default function AppointmentVideo() {
  const boxStyle = {
    boxShadow: '0px 0px 12px 0px #6DE5F2',
  };
  return (
    <div className="pl-5">
      <div className="flex align-items-center gap-6">
        <div className="p-3 border-round-lg shadow-2 flex-1 bg-gray-400">
          <div className="flex justify-content-between mb-4">
            <Chip
              label="24:05:11"
              icon="pi pi-stop-circle"
              pt={{ icon: { className: 'text-red-600' } }}
            />

            <Avatar icon="pi pi-window-maximize" size="" shape="circle" />
          </div>
          <div className="flex flex-column align-items-center justify-content-center gap-2">
            <Image
              src="/img/png/unknownUser.png"
              alt="Image"
              height="100"
              width="100"
            />
            <div className="font-bold text-2xl">Patient</div>
            <div className="flex gap-4 my-4">
              <Button
                icon="pi pi-video"
                severity="secondary"
                aria-label="Bookmark"
              />
              <Button
                icon="pi pi-volume-off"
                severity="secondary"
                aria-label="Bookmark"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/img/png/chatImage.png"
            alt="Image"
            height="100%"
            width="100%"
            pt={{
              image: { className: 'border-round-xl' },
            }}
          />
        </div>
      </div>

      <div className="flex align-items-center gap-4 my-4 justify-content-center">
        <Button label="Enable" severity="secondary" rounded />
        <Button label="End Call" severity="danger" rounded />
      </div>
      <div className="flex justify-content-between mt-3">
        <div className="flex-1 mt-8">
          <h2 className="text-color-secondary">Doctor Recommendations</h2>
          <div className="card w-7 border-round-lg" style={boxStyle}>
            <h4 className="text-color-secondary">
              How you should check your health details by your own?
            </h4>
            <div className="flex gap-3 align-items-center">
              <Button
                label="Today 15:25"
                raised
                size="small"
                className="bg-cyan-100 border-none text-500 text-xs"
              />
              <Button
                icon="pi pi-print"
                severity="danger"
                rounded
                className="bg-cyan-100 border-none text-500 text-xs"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ChatCard />
        </div>
      </div>
    </div>
  );
}
