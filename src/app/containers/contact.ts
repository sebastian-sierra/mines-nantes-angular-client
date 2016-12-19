import {Component, OnInit} from "@angular/core";
import {select} from "ng2-redux";
import {Observable} from "rxjs";
import {Contact} from "../app";
import {Router, ActivatedRoute} from "@angular/router";
import {CurrentContactActions} from "../actions/CurrentContactActions";
import {ContactsActions} from "../actions/ContactsActions";

@Component({
  selector: 'contact',
  templateUrl: 'contact.html'
})
export class ContactComponent implements OnInit {

  contact: Contact;
  @select() currentContact$: Observable<Contact>;

  constructor(private router: Router, private contactsActions: ContactsActions) {}

  ngOnInit(): void {
    this.currentContact$.subscribe(contact => this.contact = contact);
  }

  delete(id: string) {
    this.contactsActions.remove(id);
    this.router.navigate(['/contacts']);
  }
}
