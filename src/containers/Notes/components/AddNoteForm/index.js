import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { validateNote } from './validation';
import CustomTextField from '../../../../components/CustomTextField';
import CustomButton from '../../../../components/CustomButton';
import CustomSelectField from '../../../../components/CustomSelectField';
import { reducer, initialState } from './reducer';
import { COLOR_OPTIONS } from '../../../../constants';

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  inputs: {
    maxWidth: '50%',
    display: 'table',
    margin: '20px auto',
  },
}));

const inputFields = [
  {
    id: 'noteText',
    label: 'Note Text',
  },
]

const AddNoteForm = ({ noteToBeEdited, onSubmit, cancelNoteEditing }) => {
  const classes = useStyles();
  
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: 'reset', data: noteToBeEdited || initialState })
  }, [noteToBeEdited]);

  const handleOnSubmit = () => {
    const errors = validateNote(state);
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
          <Grid className={classes.inputs} spacing={2} container justify='center'>
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
            <Grid item xs={12}>
              <CustomSelectField
                title="Color"
                value={state.color}
                options={COLOR_OPTIONS}
                errorMessage={state.error.color}
                width="100%"
                onChange={event => dispatch({ type: 'color', data: event.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomButton title="Save Note" onClick={handleOnSubmit} />
              {
                noteToBeEdited && (
                  <CustomButton
                    title="Cancel"
                    color="secondary"
                    onClick={() => cancelNoteEditing()}
                  />
                )
              }
            </Grid>
          </Grid>
        </form>
      </main>
    </React.Fragment>
  );
}

AddNoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  noteToBeEdited: PropTypes.object,
  cancelNoteEditing: PropTypes.func.isRequired,
};

export default AddNoteForm;
