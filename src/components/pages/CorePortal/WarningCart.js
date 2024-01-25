import { Card } from 'primereact/card'
import React from 'react'

export default function WarningCart({ title="", value="" }) {
    return (
        <Card
            pt={{
                body: { className: 'bg-red-100 border-round-xl p-0' },
                root: { className: 'bg-red-100 border-round-xl p-0' },
                content: { className: 'px-4' }
            }}
        >
            <div className='flex gap-2'>
            <i className="pi pi-times border-1 border-circle font-bold solid text-red-600" style={{height:"fit-content",padding:"2px"}}></i>
                <div>
                    <div className='text-red-600 text-xl mb-2'>{title}</div>
                    <div>{value}</div>
                </div>

            </div>
        </Card>
    )
}
