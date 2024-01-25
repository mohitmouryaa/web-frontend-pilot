import React from 'react';
import TelihealtCard from './TelihealtCard';
import AlertsCard from './AlertsCard';
import { Badge } from 'primereact/badge';
import { PatientApprovalData, infoData, screenData } from './data';
import AnaylistChart from './AnaylistChart';
import Paitent from './Paitent';
import PatientApproval from './PatientApproval';
import { Divider } from 'primereact/divider';
import Screen from './Screen';
export default function Dashboard() {
  return (
    <div className="flex gap-6 flex-wrap px-4">
      <div className="flex-1">
        <TelihealtCard />
        <div className="my-4">
          <h2 className="mb-6 text-600 ">Patient waiting for approval:</h2>
          {PatientApprovalData?.map(({ name, icon, time }) => (
            <PatientApproval {...{ name, icon, time }} />
          ))}
          <Divider />
          <div className="flex justify-content-between my-6">
            {screenData?.map(({ imagePath, title }) => (
              <Screen {...{ title, imagePath }} />
            ))}
          </div>
          <Paitent />
        </div>
      </div>
      <div className="w-5">
        <AlertsCard />
        {infoData?.map(({ label, value }) => (
          <div className="my-4 flex justify-content-between">
            <div className="text-600 text-xl font-semibold">{label}</div>
            <Badge value={value} severity="danger"></Badge>
          </div>
        ))}
        <div style={{ marginTop: '5.5rem' }}>
          <AnaylistChart />
        </div>
      </div>
    </div>
  );
}
