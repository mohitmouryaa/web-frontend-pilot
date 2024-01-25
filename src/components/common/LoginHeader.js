import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Image } from 'primereact/image';
export default function LoginHeader({ header }) {
  return (
    <div className="bg-cyan-100 flex align-items-center px-4 justify-content-between h-6rem">
      <div className="flex flex-1">
        <Image src="/img/logo.svg" alt="Image" className="w-3" />
        <div className="text-500 text-3xl font-semibold ">{header || ''}</div>
      </div>

      <div className="flex align-items-center gap-2 mr-3">
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          shape="circle"
        />
        <div>
          <div className="font-semibold">Jaction</div>
          <div className="text-400">manager</div>
        </div>
      </div>
    </div>
  );
}
