import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import './../../../styles/chatCard.scss';

export default function ChatCard() {
  const footer = (
    <>
      <span className="p-input-icon-left w-full ml-1">
        <i
          className="pi pi-link text-2xl attach-file-icon -ml-2 cursor-pointer"
          onClick={() => console.log('Attach file')}
        />
        <InputText
          placeholder="Type Something..."
          style={{ background: '#F6F6F6' }}
          className="border-none w-full"
        />
        <i
          className="pi pi-telegram text-4xl cursor-pointer"
          onClick={() => console.log('Send Message')}
        />
      </span>
    </>
  );

  return (
    <div className="card flex justify-content-center">
      <Card
        title="Chats"
        subTitle="Card subtitle"
        className="md:w-25rem"
        footer={footer}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  );
}
