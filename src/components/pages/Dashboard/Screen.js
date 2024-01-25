import { Card } from 'primereact/card'
import { Image } from 'primereact/image'
import React from 'react'

export default function Screen({ title = "", imagePath = "" }) {
  return (
    <div>
      <Card pt={{
        body: { className: ' p-0 w-12rem' },
        root: { className: '' },
        content: { className: 'p-2 flex flex-column justify-content-center align-items-center' },
      }}>
        {title ? <h2>{title}</h2> : null}
        <Image
          src={imagePath}
          alt="Image"
          height="70"
          width="70"
          className='mb-4'
        />
      </Card>
    </div>
  )
}
