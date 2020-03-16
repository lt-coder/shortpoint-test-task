import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
  },
}));

const CustomSelectField = ({ id, labelId, value, errorMessage, handleChange, options, ...props }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        onChange={handleChange}
        {...props}
      >
        {
          options.map(item => {
            return (<MenuItem value={item.value}>{item.label}</MenuItem>)
          })
        }
      </Select >
    </FormControl>
  );
}

CustomSelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CustomSelectField;
