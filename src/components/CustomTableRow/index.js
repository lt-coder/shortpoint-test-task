import React from 'react';
import PropTypes from 'prop-types';
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
