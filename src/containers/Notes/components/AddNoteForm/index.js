import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { validateContact } from './validation';
import CustomTextField from '../../../../components/CustomTextField';
import CustomButton from '../../../../components/CustomButton';
import CustomSelectField from '../../../../components/CustomSelectField';
import { reducer, initialState } from './reducer';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  inputs: {
    maxWidth: '40%',
    display: 'table',
    margin: '20px auto',
  },
  mt15: {
    marginTop: '15px',
  }
}));

const options = [
  {
    value: 'red',
    label: 'red',
  },
  {
    value: 'blue',
    label: 'blue',
  },
  {
    value: 'pink',
    label: 'pink',
  },
  {
    value: 'green',
    label: 'green',
  },
]

const inputFields = [
  {
    id: 'noteText',
    label: 'Note Text',
  },
]

const AddContactForm = ({ contactToBeEdited, onSubmit, cancelContactEditing }) => {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: 'reset', data: contactToBeEdited || initialState })
  }, [contactToBeEdited]);

  const handleOnSubmit = () => {
    const errors = validateContact(state);
    if (Object.entries(errors).length === 0) {
      const { error, ...otherState } = state;
      onSubmit(otherState);
      dispatch({ type: 'reset', data: initialState })
    }

    dispatch({ type: 'error', data: errors })
  }

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <form>
          <Typography className={classes.mt15} component="h2" variant="h4" align="center">
            Note
          </Typography>
          <Grid className={classes.inputs} spacing={5} container justify='center'>
            {
              inputFields.map(input => (
                <Grid key={input.id} item xs={12}>
                  <CustomTextField
                    id={input.id}
                    label={input.label}
                    value={state[input.id]}
                    errorMessage={state.error[input.id]}
                    onChange={event => dispatch({ type: input.id, data: event.target.value })}
                  />
                </Grid>
              ))
            }

            <Grid className={classes.mt15} item xs={12}>
              < CustomSelectField
                value={state.color}
                options={options}
                width='100%'
                handleChange={event => dispatch({ type: 'color', data: event.target.value })}
              />
            </Grid>
            <CustomButton title="Add Note" onClick={handleOnSubmit} />
            {
              contactToBeEdited && (
                <CustomButton
                  title="Cancel"
                  color="secondary"
                  onClick={() => cancelContactEditing()}
                />
              )
            }
          </Grid>
        </form>
      </main>
    </React.Fragment>
  );
}

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contactToBeEdited: PropTypes.object,
  cancelContactEditing: PropTypes.func.isRequired,
};

export default AddContactForm;
