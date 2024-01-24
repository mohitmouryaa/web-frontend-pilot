import React from 'react'
import WarningCart from './WarningCart'
import { cardData } from './data'
import { Card } from 'primereact/card'
import { Avatar } from 'primereact/avatar'
import HealthGraph from './HealthGraph'
import InjuryGraph from './InjuryGraph'
import HealthReports from './HealthReports'
export default function CorePortal() {
  return (
    <div className='flex gap-6 pl-6'>
      <div className='flex-1'>
        <div className='mb-6'>
          <h2>Health Reports</h2>
          <HealthReports/>
        </div>
        <div className='mb-8'>
          <h2>Next Steps</h2>
          <Card>
            <div>

              <div className='flex gap-4'>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                <div>
                  <div className='text-xl mb-2 font-semibold'>Dr. Alec's Appontment</div>
                  <div className='mb-4'>Change a few things up and try submitting again.</div>
                  <div className='flex gap-3'>
                    <i className="pi pi-calendar  text-2xl mt-1" ></i>
                    <div className='text-lg w-14rem'>Monday July 13, 2024
                      10:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div >
          <h2>MSK health Graph</h2>
          <HealthGraph/>
        </div>
      </div>
      <div className='flex-1'>
        <h2>Task Alerts</h2>
        {cardData?.map(({ title, value }) => <div key={title} className='mb-6'>
          <WarningCart {...{ title, value }} />
        </div>)}
        <div>
          <h2>Upcoming Appointments</h2>
          <div className='flex gap-3 mb-4'>
            <i className="pi pi-calendar  text-2xl mt-1"></i>
            <div className='text-lg w-14rem'>Monday July 13, 2024
              10:00 AM</div>
          </div>
          <div className='flex gap-3'>
            <i className="pi pi-calendar  text-2xl mt-1" ></i>
            <div className='text-lg w-14rem'>Monday July 13, 2024
              10:00 AM</div>
          </div>
        </div>
        <div className='mb-6'>
          <h2>Completed Appointments</h2>
          <div className='flex gap-3 mb-4'>
            <i className="pi pi-check  text-sm fond-bold text-green-500 border-1 mt-1" style={{ height: "fit-content", padding: "2px" }}></i>
            <div className='text-lg w-14rem'>Monday July 13, 2024
              10:00 AM</div>
          </div>
        </div>
        <div >
          <h2>Injury Care Map</h2>
          <InjuryGraph/>
        </div>
      </div>
    </div>
  )
}
