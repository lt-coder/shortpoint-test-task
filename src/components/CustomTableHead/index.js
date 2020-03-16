import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

const CustomTableHead = ({ isSelected, onChange }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">
          <Checkbox
            checked={isSelected}
            onChange={onChange}
            inputProps={{ 'aria-label': 'select all' }}
          />
        </TableCell>
        <TableCell align="center">Name</TableCell>
        <TableCell align="center">PhoneNumber</TableCell>
        <TableCell align="center">Action</TableCell>
      </TableRow>
    </TableHead>
  );
}

CustomTableHead.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomTableHead;
