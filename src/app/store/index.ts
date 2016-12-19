import {combineReducers} from "redux";
import currentContact from './currentContact';
import contacts from './contacts';
import {AppState} from "../app";

const rootReducer = combineReducers<AppState>({
  currentContact,
  contacts
});

export default rootReducer
