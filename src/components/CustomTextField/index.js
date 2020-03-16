import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const CustomTextField = ({ id, label, value, errorMessage, ...props }) => {
  return (
    <TextField
      required
      error={!!errorMessage}
      id={id}
      name={id}
      label={label}
      value={value}
      fullWidth
      variant="outlined"
      helperText={errorMessage}
      {...props}
    />
  );
}

CustomTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CustomTextField;
