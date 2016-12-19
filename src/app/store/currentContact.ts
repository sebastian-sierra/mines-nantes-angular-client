import {Contact, ContactAction} from "../app";

export default function (state: Contact = null, action: ContactAction): Contact {
  switch (action.type) {
    case 'CHANGE_CONTACT':
      return action.payload;
    default:
      return state;
  }
}
