import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';

let nextContactId = 0;

const configSlice = createSlice({
  name: 'notes',
  initialState: {
    error: null,
    loading: false,
    list: [],
    editContact: '',
  },
  reducers: {
    addNote: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(contact) {
        return { payload: { ...contact, id: nextContactId++, timeCreated: moment().format('LLL') } }
      }
    },
    startContactEditing(state, action) {
      state.editContact = action.payload;
    },
    cancelContactEditing(state) {
      state.editContact = '';
    },
    editContact(state, action) {
      const editedContact = action.payload;
      const indexOfContact = state.list.findIndex(contact => contact.id === editedContact.id);
      state.list.splice(indexOfContact, 1, editedContact);
      state.editContact = '';
    },
    deleteContacts(state, action) {
      const contactIdsToBeDeleted = action.payload;
      contactIdsToBeDeleted.forEach((contactId) => {
        const indexOfContact = state.list.findIndex(contact => contact.id === contactId);
        state.list.splice(indexOfContact, 1);
      });
    }
  }
})
// Extract the action creators object and the reducer
const { actions, reducer } = configSlice;
// Extract and export each action creator by name
export const { 
  addNote, 
  startContactEditing, 
  editContact, 
  deleteContacts, 
  cancelContactEditing, 
} = actions;
// Export the reducer, either as a default or named export
export default reducer;
