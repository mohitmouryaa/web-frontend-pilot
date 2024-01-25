import React from 'react'
import PatientCall from './PatientCall'
import { PatientApprovalData } from '../Dashboard/data'
import PatientApproval from '../Dashboard/PatientApproval'
import { Card } from 'primereact/card'
import { Badge } from 'primereact/badge'
import Screen from '../Dashboard/Screen'
import { screenData } from './data'
import PatientTable from './PatientTable'
import { Button } from 'primereact/button'
import TableHeader from './TableHeader'

export default function PatientInformation() {
  const ptButton = {
    root: { className: 'w-2rem h-2rem' }
  }
  const pt = {
    body: { className: ' p-0 font-semibold' },
    root: { className: 'px-4 w-max py-2 bg-white border-1 shadow-none border-300 text-600 text-xl p-overlay-badge' },
    content: { className: 'py-2 px-4' },
  }
  const tableHeader = <TableHeader />;
  const customColumnBody = (rowData, data) => {
    const { field, rowIndex } = data;
    switch (field) {
      case 'action':
        return (
          <div className='flex gap-2 justify-content-center align-items-center'>
            <Button icon="pi pi-inbox" rounded severity="success" aria-label="Search" size='small' pt={ptButton} />
            <Button icon="pi pi-search-plus" rounded severity="success" aria-label="Search" size='small' pt={ptButton} />
            <Button icon="pi pi-search-minus" rounded severity="success" aria-label="Search" size='small' pt={ptButton} />
            <Button icon="pi pi-plus" rounded severity="danger" aria-label="Search" size='small' pt={ptButton} />
            <Button icon="pi pi-phone" rounded text severity="secondary" aria-label="Bookmark" pt={ptButton} />
            <Button icon="pi pi-user" rounded text severity="secondary" aria-label="Bookmark" />
          </div>

        );
      case 'id':
        return (
          <div>{rowIndex + 1}</div>
        );
      default:
        return <div>{rowData?.[data?.field] || "-"}</div>;

    };
  }
  return (
    <div className='pl-4'>
      <div >
        <div className='flex flex-wrap gap-6'>
          <div className='flex-1'>
            <PatientCall />
          </div>
          <div className='flex flex-column gap-4 w-5'>
            <Card
              pt={pt}
            >
              <Badge value="5+" severity="danger"></Badge>
              Patient Messages
            </Card>
            <Card
              pt={pt}
            ><Badge value="5+" severity="danger"></Badge>
              Approval Request</Card>
          </div>
        </div>
        <div className='flex flex-wrap gap-6'>
          <div className='flex-1'>
            <h2 className='mb-4 text-600 '>Requests:</h2>
            {PatientApprovalData?.map(({ name, icon, time }) => <PatientApproval {...{ name, icon, time }} />)}
          </div>
          <div className='w-5'>
            <div className='flex justify-content-between my-6 gap-2'>
              {screenData?.map(({ imagePath, title }) => <Screen {...{ title, imagePath }} />)}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <PatientTable {...{ customColumnBody, tableHeader }} />
      </div>
    </div>
  )
}
