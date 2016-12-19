import {Injectable} from "@angular/core";
import {NgRedux} from "ng2-redux";
import {AppState, Contact} from "../app";
import {ContactsApi} from "../services/ContactsApi";
export const CHANGE_CONTACT = 'CHANGE_CONTACT';

@Injectable()
export class CurrentContactActions {
  constructor(private ngRedux: NgRedux<AppState>, private contactsApi: ContactsApi) {

  }

  changeContact(contact: Contact = null): void {
    this.ngRedux.dispatch({type: CHANGE_CONTACT, payload: contact});
  }

  retrieveContact(id: string) {
    this.contactsApi.getContact(id).subscribe(contact => {
      this.ngRedux.dispatch({type: CHANGE_CONTACT, payload: contact});
    })
  }
}
