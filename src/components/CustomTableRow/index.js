import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const CustomTableRow = ({ contact, isSelected, selectionChanged, editingButtonClicked, deleteButtonClicked }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        {contact.color}
      </Paper>
    </div>
  );
}

CustomTableRow.propTypes = {
  contact: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  selectionChanged: PropTypes.func.isRequired,
  editingButtonClicked: PropTypes.func.isRequired,
  deleteButtonClicked: PropTypes.func.isRequired,
};

export default CustomTableRow;
