import { DataTable } from 'primereact/datatable';
import React from 'react';
import PropTypes from 'prop-types';
export default function MDataTable(props) {
  const {
    filterDisplay = '',
    value = [],
    dataKey = '',
    paginator,
    rows,
    lazy,
    pt = {},
    editMode = '',
    onRowEditComplete = () => { },
    rowsPerPageOptions = '',
    paginatorTemplate = '',
    currentPageReportTemplate = '',
  } = props;
  return (
    <div className='custom-datatable'>
      <DataTable
        {...{
          filterDisplay,
          value,
          dataKey,
          paginator,
          rows,
          lazy,
          editMode,
          onRowEditComplete,
          rowsPerPageOptions,
          paginatorTemplate,
          currentPageReportTemplate,
          pt,
          ...props,
        }}
      />
    </div>
  );
}
MDataTable.propTypes = {
  value: PropTypes.array,
  rowsPerPageOptions: PropTypes.array,
  filterDisplay: PropTypes.string,
  dataKey: PropTypes.string,
  editMode: PropTypes.string,
  onRowEditComplete: PropTypes.func,
  paginatorTemplate: PropTypes.string,
  currentPageReportTemplate: PropTypes.string,
  globalFilter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element,
    PropTypes.number,
  ]),
};
