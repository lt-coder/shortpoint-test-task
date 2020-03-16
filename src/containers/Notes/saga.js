import { put, takeEvery } from 'redux-saga/effects';
import { addNote, editNote, deleteNote } from './reducer';
import { setOpen } from '../Notifications/reducer';

function* addNoteSaga() {
  yield put(setOpen({ message: 'Note Successfully Added!', isSuccess: true }));
}

function* editNoteSaga() {
  yield put(setOpen({ message: 'Note Successfully Edited!', isSuccess: true }));
}

function* deleteNoteSaga() {
  yield put(setOpen({ message: 'Notes Successfully Deleted!', isSuccess: true }));
}

function* phonebookSaga() {
  yield takeEvery(addNote.type, addNoteSaga);
  yield takeEvery(editNote.type, editNoteSaga);
  yield takeEvery(deleteNote.type, deleteNoteSaga);
}

export default phonebookSaga;
