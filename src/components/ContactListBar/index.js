import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
  },
}));

const ContactListBar = ({ numOfSelectedItems, deleteSelectedItems }) => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      { numOfSelectedItems > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1">
            {numOfSelectedItems} selected
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle">
            Contact List
          </Typography>
        )
      }
      { numOfSelectedItems > 0 && (
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={deleteSelectedItems}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )
      }
    </Toolbar>
  );
}

ContactListBar.propTypes = {
  numOfSelectedItems: PropTypes.number.isRequired,
  deleteSelectedItems: PropTypes.func.isRequired,
};

export default ContactListBar;
