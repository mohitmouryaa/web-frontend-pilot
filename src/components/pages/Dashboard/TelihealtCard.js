import { Card } from 'primereact/card';
import React from 'react';
import { telihealthData } from './data';
export default function TelihealtCard() {
  return (
    <Card
      title="Today’s Telehealth Calls:"
      pt={{
        body: { className: ' p-4' },
        root: { className: ' p-0 ' },
        content: { className: 'p-0 px-5' },
        title: { className: 'text-2xl mb-5' },
      }}
    >
      <ul className="pl-0 list-disc text-xl ">
        {telihealthData?.map(({ name, icon }) => (
          <li className="mb-4">
            <div className="flex justify-content-between mb-3">
              <div>{name || ''}</div>
              <i className={`pi ${icon}`}></i>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
