import React from 'react';
import { columnList, userTableData } from './data';
import MDataTable from '../../common/DataTable/MDataTable';
import MDataColumn from '../../common/DataTable/MDataColumn';
import { Avatar } from 'primereact/avatar';
import { Image } from 'primereact/image';

import RecordsIcon from './RecordsIcon';

export default function PatientTable() {
  const customColumnBody = (rowData, data) => {
    const { field } = data;
    switch (field) {
      case 'records':
        return (
          <div className="flex align-items-center justify-content-center gap-2 mr-3">
            <RecordsIcon icon="pi-plus" />
            <RecordsIcon icon="pi-search-plus" />
            <RecordsIcon icon="pi-search-minus" />
            <RecordsIcon icon="pi-plus" />
          </div>
        );
      case 'coreTeam':
        return (
          <div className="flex align-items-center justify-content-center gap-2 mr-3">
            <div className="p-mr-3 p-shadow-2 flex flex-column align-items-center justify-content-center">
              <Image src="/img/triple-doctor.svg" width="120" />
            </div>
          </div>
        );
      case 'carelevel':
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
            body={(rowData, data) => customColumnBody(rowData, data)}
          />
        );
      })}
    </MDataTable>
  );
}
