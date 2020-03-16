import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNote, cancelContactEditing, startContactEditing, editContact, deleteContacts } from './reducer';
import NodeList from './components/NoteList';
import AddNoteForm from './components/AddNoteForm';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Phonebook = ({
  contacts,
  addNote,
  cancelContactEditing,
  startContactEditing,
  editContact,
  deleteContacts,
  contactToBeEdited,
}) => {
  const classes = useStyles();

  const onSubmit = (contact) => {
    if (contactToBeEdited) {
      editContact(contact);
    } else {
      addNote(contact);
    }
  }

  return (
    <div className={classes.root}>
      <Grid container direction="row">
        <Grid item sm={12} md={12}>
          <AddNoteForm
            onSubmit={onSubmit}
            contactToBeEdited={contactToBeEdited}
            cancelContactEditing={cancelContactEditing}
          />
        </Grid>
        <Grid item sm={12} md={12}>
          <NodeList
            contacts={contacts}
            deleteContacts={deleteContacts}
            startContactEditing={startContactEditing}
          />
        </Grid>
      </Grid>
    </div>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContacts: PropTypes.func.isRequired,
  startContactEditing: PropTypes.func.isRequired,
  cancelContactEditing: PropTypes.func.isRequired,
  contactToBeEdited: PropTypes.object,
};

const mapDispatchToProps = { addNote, startContactEditing, cancelContactEditing, editContact, deleteContacts };

const mapStateToProps = (state) => {
  return {
    contacts: state.notes.list,
    contactToBeEdited: state.notes.list.find(contact => contact.id === state.notes.editContact),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Phonebook);
