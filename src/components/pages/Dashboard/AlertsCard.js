import { Card } from 'primereact/card';
import React from 'react';
import { alertCardData } from './data';
import { Chip } from 'primereact/chip';
export default function AlertsCard() {
  return (
    <Card
      pt={{
        body: { className: ' p-4' },
        root: { className: ' p-0 ' },
        content: { className: 'p-0' },
      }}
    >
      <div className="flex  justify-content-between">
        <h1>Alerts:</h1>
        <div className="flex flex-column gap-3">
          {alertCardData?.map((val) => (
            <Card
              pt={{
                body: { className: ' p-0 font-semibold' },
                root: {
                  className:
                    'px-4 py-2 bg-white border-1 shadow-none border-300 text-600 text-xl',
                },
                content: { className: 'py-2 px-4' },
              }}
            >
              {val}
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}
