import {Contact, ContactsAction} from "../app";
import {FETCH_CONTACTS} from "../actions/ContactsActions";
export default function (state: Contact[] = [], action: ContactsAction): Contact[] {
  switch (action.type) {
    case FETCH_CONTACTS:
      return action.payload as Contact[];
    case 'ADD_CONTACT':
      return state.concat([action.payload as Contact]);
    case 'REMOVE_CONTACT': {
      const index = state.findIndex(contact => contact._id == action.payload);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case 'UPDATE_CONTACT': {
      const updatedContact = action.payload as Contact;
      const index = state.findIndex(contact => contact._id == updatedContact._id);
      return [...state.slice(0, index), updatedContact, ...state.slice(index + 1)];
    }
    default:
      return state
  }
}
