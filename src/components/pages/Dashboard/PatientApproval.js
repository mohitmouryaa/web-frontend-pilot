import { Card } from 'primereact/card'
import { Button } from 'primereact/button';
import React from 'react'

export default function PatientApproval({ name, icon, time }) {
  const pt = {
    body: { className: ' p-0 font-semibold' },
    root: { className: 'px-2 py-1 bg-white border-1 shadow-none border-300 text-600 text-xl' },
    content: { className: 'py-2 px-3' },

  }
  return (

    <div className='flex gap-4 mb-3'>
      <div className='text-2xl text-500 w-3'>{name}</div>
      <div className='flex flex-1 align-items-center justify-content-between'>
        <div className='text-2xl text-500'>{time}</div>
        <Card
          pt={pt}
        >Approval</Card>
        <Card
          pt={pt}
        >Approval</Card>
        <Button icon={`pi ${icon}`} aria-label="Filter" className='bg-cyan-200 py-2 border-none text-900 font-bold text-xl' />
      </div>
    </div>

  )
}
