import React from 'react'
import Table from './Table';

export default function OrthopedicSpecialist() {
    const customColumnBody = (rowData, data) => {
        const { field } = data;
        switch (field) {
            case 'doctor':
                return (
                    <div>
                        {rowData?.[data?.field] || "-"}
                    </div>

                );
            default:
                return <div>{rowData?.[data?.field] || "-"}</div>;

        };
    }
    return (
        <div className='p-6'>
            <Table {...{ customColumnBody }} />
        </div>
    )
}