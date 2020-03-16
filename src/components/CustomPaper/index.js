import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const CustomPaper = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {children}
    </Paper>
  );
}

CustomPaper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CustomPaper;
