import React from 'react'
import Table from './FileTable';
import FileTable from './FileTable';
import InjuryTable from './InjuryTable';
import { Button } from 'primereact/button';

export default function Documents() {
    const customColumnBody = (rowData, data) => {
        const { field } = data;
        switch (field) {
            case 'action':
                return (
                    <div>
                        <Button icon="pi pi-eye" rounded text severity="secondary" aria-label="Favorite" />
                        <Button icon="pi pi-trash" rounded text severity="danger" aria-label="Cancel" />
                    </div>

                );
            default:
                return <div>{rowData?.[data?.field] || "-"}</div>;

        };
    }
    return (
        <div className='p-6'>
            <div className='flex gap-3 mb-4'>
                <Button className='' label="Add Document" outlined size='small' icon="pi pi-download" />
                <Button label="Upload Document" outlined size='small' icon="pi pi-download" />
            </div>
            <FileTable {...{ customColumnBody }} />
            <InjuryTable {...{ customColumnBody }} />
            <div className='flex gap-3 my-4'>
                <Button label="Add Document" outlined size='small' icon="pi pi-download" />
                <Button label="Add PDF" outlined size='small' icon="pi pi-download" />
                <Button label="Add Image" outlined size='small' icon="pi pi-download" />
            </div>
        </div>
    )
}
