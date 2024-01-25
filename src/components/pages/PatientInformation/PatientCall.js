import React from 'react'
import { telihealthData } from '../Dashboard/data'

export default function PatientCall() {
  return (
    <div>
    <h2 className='text-600'>Today’s Patient Calls:</h2>
    <ul className='pl-4 list-disc text-xl text-600'>
      {telihealthData?.map(({ name, icon }) =>
        <li className='mb-4'>
          <div className='flex justify-content-between mb-3'>
            <div>{name || ""}</div>
          </div>
        </li>
      )}
    </ul>
  </div>
  )
}
