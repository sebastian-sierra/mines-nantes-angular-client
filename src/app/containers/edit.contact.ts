import {Component, OnInit} from "@angular/core";
import {select} from "ng2-redux";
import {Observable} from "rxjs";
import {Contact} from "../app";
import {ContactsActions} from "../actions/ContactsActions";
import {Router} from "@angular/router";

@Component({
  selector: 'edit-contact',
  templateUrl: 'edit.contact.html'
})
export class EditContactComponent implements OnInit {

  contact: Contact = {name: '', lastName:''};
  @select() currentContact$: Observable<Contact>;

  constructor(private contactsActions: ContactsActions, private router: Router) {}

  ngOnInit(): void {
    this.currentContact$.filter(contact => contact != null).subscribe(contact => {
      this.contact = contact;
    });
  }

  onSubmit(): void {
    if(!this.contact._id) {
      this.contactsActions.add(this.contact);
    } else {
      this.contactsActions.update(this.contact);
    }
  }
}
