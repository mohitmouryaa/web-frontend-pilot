import React from 'react';
import { columnList, userTableData } from './data';
import MDataTable from '../../common/DataTable/MDataTable';
import MDataColumn from '../../common/DataTable/MDataColumn';
import { Avatar } from 'primereact/avatar';

export default function PatientTable() {
  const customColumnBody = (rowData, data) => {
    const { field } = data;
    switch (field) {
      case 'records':
        return (
          <div className="flex align-items-center justify-content-center gap-2 mr-3">
            <i className="pi pi-check" style={{ color: 'green' }}></i>
            <i className="pi pi-times" style={{ color: 'green' }}></i>
            <i className="pi pi-search" style={{ color: 'green' }}></i>
            <i className="pi pi-user" style={{ color: 'green' }}></i>
          </div>
        );
      case 'coreTeam':
        return (
          <div className="flex align-items-center justify-content-center gap-2 mr-3">
            <Avatar
              size="xlarge"
              image="/img/triple-doctor.svg"
              shape="circle"
            />
          </div>
        );
      case 'season':
        return (
          <div className="flex align-items-center justify-content-center gap-2 mr-3">
            <Avatar
              size="large"
              image="/img/patient-chart.svg"
              shape="circle"
            />
            2%
          </div>
        );
      default:
        return <div>{rowData?.[data?.field] || '-'}</div>;
    }
  };
  return (
    <MDataTable
      showGridlines
      value={userTableData}
      dataKey="id"
      paginator={false}
      lazy
      // scrollable
      // scrollHeight="49vh"
      size="small"
    >
      {columnList.map((val, idx) => {
        const {
          field,
          showFilterMenu,
          sortable,
          header,
          filter,
          filterPlaceholder,
          showClearButton,
        } = val;
        return (
          <MDataColumn
            pt={{
              headercell: { className: 'bg-cyan-100 ' },
            }}
            alignHeader="center"
            align="center"
            key={field + idx}
            field={field}
            showFilterMenu={showFilterMenu}
            sortable={sortable}
            responsive={true}
            header={header}
            filter={filter}
            filterPlaceholder={filterPlaceholder}
            showClearButton={showClearButton}
            style={{ minWidth: '12rem' }}
            body={(rowData, data) => customColumnBody(rowData, data)}
          />
        );
      })}
    </MDataTable>
  );
}
