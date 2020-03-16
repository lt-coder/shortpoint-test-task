import { combineReducers } from 'redux';
import notes from '../containers/Notes/reducer';
import notifications from '../containers/Notifications/reducer';

export default combineReducers({ 
  notes,
  notifications, 
});