import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const CustomButton = ({ title, onClick, color='primary' }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}
      className={classes.button}
    >
      {title}
    </Button>
  );
}

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
