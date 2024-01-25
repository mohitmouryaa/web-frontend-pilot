import { Column } from 'primereact/column';
import React from 'react';
import PropTypes from 'prop-types';

export default function MDataColumn(props) {
  const {
    field = '',
    showFilterMenu = true,
    sortable = true,
    header = '',
    filter = true,
    filterPlaceholder = '',
    showClearButton = true,
    style,
    body = () => {},
    editor = () => {},
  } = props;
  return (
    <Column
      {...{
        field,
        showFilterMenu,
        sortable,
        header,
        filter,
        filterPlaceholder,
        showClearButton,
        style,
        body,
        editor,
        ...props,
      }}
    />
  );
}
MDataColumn.propTypes = {
  field: PropTypes.string,
  showFilterMenu: PropTypes.bool,
  body: PropTypes.func,
  sortable: PropTypes.bool,
  filterPlaceholder: PropTypes.string,
  header: PropTypes.string,
  showClearButton: PropTypes.bool,
  editor: PropTypes.func,
  filter: PropTypes.bool,
};
