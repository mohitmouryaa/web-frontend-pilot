import { Avatar } from 'primereact/avatar';
import { Image } from 'primereact/image';
import React from 'react';

export default function CartDetail({ acitivity, users, topic, bodyPart }) {
  const boxStyle = {
    boxShadow:
      'rgba(20, 137, 149, 0.25) 7px 5px 0px 0px, rgb(133 137 137 / 25%) -3px -2px 5px 0px',
    background: '#FFF',
  };
  return (
    <div
      className="card  flex justify-content-between border-round-lg mb-4"
      style={boxStyle}
    >
      <div className="w-4 flex gap-3 align-items-center">
        <Image
          src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          alt=""
        />
        <div className="font-bold text-2xl">{bodyPart}</div>
      </div>
      <div className="flex-1 flex">
        <div className="flex-1">
          <div className="mb-2 text-xl text-400">Topic</div>
          <div className="font-bold text-2xl">{topic}</div>
        </div>
        <div className="flex-1">
          <div className="mb-2 text-xl text-400">Users</div>
          <div className="flex gap-2">
            {users?.map((items, index) => (
              <Avatar
                key={index}
                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                shape="circle"
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-2 text-xl text-400">Activity</div>
          <div className="font-bold text-2xl">{acitivity}</div>
        </div>
      </div>
    </div>
  );
}
