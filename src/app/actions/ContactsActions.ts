import {Injectable} from "@angular/core";
import {NgRedux} from "ng2-redux";
import {AppState, Contact} from "../app";
import {ContactsApi} from "../services/ContactsApi";
import {Router} from "@angular/router";
import {CHANGE_CONTACT, CurrentContactActions} from "./CurrentContactActions";

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

@Injectable()
export class ContactsActions {
  constructor(private ngRedux: NgRedux<AppState>,
              private contactsApi: ContactsApi,
              private router: Router,
              private currentContactActions: CurrentContactActions) {

  }

  fetch(): void {
    this.contactsApi.get().subscribe(contacts => {
      this.ngRedux.dispatch({type: FETCH_CONTACTS, payload: contacts});
    });
  }

  add(contact: Contact): void {
    this.contactsApi.post(contact).subscribe(contact => {
      this.ngRedux.dispatch({type: ADD_CONTACT, payload: contact});
      this.ngRedux.dispatch({type: CHANGE_CONTACT, payload: contact});
      this.router.navigate(['/contact', contact._id]);
    })
  }

  update(contact: Contact) {
    this.contactsApi.put(contact).subscribe(() => {
      this.ngRedux.dispatch({type: UPDATE_CONTACT, payload: contact});
      this.currentContactActions.changeContact(contact);
      this.router.navigate(['/contact', contact._id]);
    })
  }

  remove(id: string) {
    this.contactsApi.delete(id).subscribe(() => {
      this.ngRedux.dispatch({type: REMOVE_CONTACT, payload: id});
      this.currentContactActions.changeContact();
    })
  }
}
