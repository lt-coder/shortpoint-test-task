import { put, takeEvery } from 'redux-saga/effects';
import { addNote, editContact, deleteContacts } from './reducer';
import { setOpen } from '../Notifications/reducer';

function* addNoteSaga(action) {
  yield put(setOpen({ message: 'Note Successfully Added!', isSuccess: true }));
}

function* editContactSaga(action) {
  yield put(setOpen({ message: 'Note Successfully Edited!', isSuccess: true }));
}

function* deleteContactsSaga(action) {
  yield put(setOpen({ message: 'Notes Successfully Deleted!', isSuccess: true }));
}

function* phonebookSaga() {
  yield takeEvery(addNote.type, addNoteSaga);
  yield takeEvery(editContact.type, editContactSaga);
  yield takeEvery(deleteContacts.type, deleteContactsSaga);
}

export default phonebookSaga;
