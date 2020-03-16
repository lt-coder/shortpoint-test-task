import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
  },
}));

const CustomSelectField = ({ value, title, errorMessage, onChange, options, ...props }) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" className={classes.formControl} error={!!errorMessage} required >
      <InputLabel ref={inputLabel} htmlFor={`outlined-${title}-native-simple`}>
        {title}
      </InputLabel>
      <Select
        native
        value={value}
        onChange={onChange}
        labelWidth={labelWidth}
        inputProps={{
          name: title,
          id: `outlined-${title}-native-simple`,
        }}
      >
        <option value="" />
        { options && options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </Select>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
}

CustomSelectField.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CustomSelectField;
