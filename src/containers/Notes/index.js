import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NodeList from './components/NoteList';
import AddNoteForm from './components/AddNoteForm';
import { addNote, cancelNoteEditing, startNoteEditing, editNote, deleteNote } from './reducer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const NotesDashboard = ({
  notes,
  addNote,
  cancelNoteEditing,
  startNoteEditing,
  editNote,
  deleteNote,
  noteToBeEdited,
}) => {
  const classes = useStyles();

  const onSubmit = (note) => {
    if (noteToBeEdited) {
      editNote(note);
    } else {
      addNote(note);
    }
  }

  return (
    <div className={classes.root}>
      <Grid container direction="row">
        <Grid item sm={12} md={12}>
          <AddNoteForm
            onSubmit={onSubmit}
            noteToBeEdited={noteToBeEdited}
            cancelNoteEditing={cancelNoteEditing}
          />
        </Grid>
        <Grid item sm={12} md={12}>
          <NodeList
            notes={notes}
            deleteNote={deleteNote}
            startNoteEditing={startNoteEditing}
          />
        </Grid>
      </Grid>
    </div>
  );
}

NotesDashboard.propTypes = {
  notes: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  startNoteEditing: PropTypes.func.isRequired,
  cancelNoteEditing: PropTypes.func.isRequired,
  noteToBeEdited: PropTypes.object,
};

const mapDispatchToProps = { addNote, cancelNoteEditing, startNoteEditing, editNote, deleteNote };

const mapStateToProps = (state) => {
  return {
    notes: state.notes.list,
    noteToBeEdited: state.notes.list.find(note => note.id === state.notes.editNote),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesDashboard);
