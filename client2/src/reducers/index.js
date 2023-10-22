import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';
import contactReducer from './contactReducer';

export default combineReducers({
  postsReducer,
  userReducer,
  contactReducer,
});
