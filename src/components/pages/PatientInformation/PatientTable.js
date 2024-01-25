import React from 'react';
import { columnList, userTableData } from './data';
import MDataTable from '../../common/DataTable/MDataTable';
import MDataColumn from '../../common/DataTable/MDataColumn';
export default function PatientTable({ customColumnBody, tableHeader }) {
  return (
    <MDataTable
      showGridlines
      value={userTableData}
      dataKey="id"
      paginator={false}
      lazy
      scrollable
      scrollHeight="49vh"
      size="small"
      header={tableHeader}
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
