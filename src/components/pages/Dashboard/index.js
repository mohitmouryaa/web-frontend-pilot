import React from 'react'
import TelihealtCard from './TelihealtCard'
import AlertsCard from './AlertsCard'
import { Badge } from 'primereact/badge'
import { infoData } from './data'
import AnaylistChart from './AnaylistChart'
import Paitent from './Paitent'
import { Card } from 'primereact/card'

export default function Dashboard() {
  return (
    <div className='flex gap-8 flex-wrap px-8'>
        <div className='flex-1'>
       <TelihealtCard/>
       <Card></Card>
       <Paitent/>
        </div>
        <div className='flex-1'>
            <AlertsCard/>
            {infoData?.map(({label,value})=>
            <div className='my-4 flex justify-content-between'>
            <div className='text-600 text-xl font-semibold'>{label}</div>
                <Badge value={value} severity="danger"></Badge>
            </div>
            )}
         <AnaylistChart/>
        </div>
    </div>
  )
}
