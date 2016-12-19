import {Component, OnInit} from "@angular/core";
import {Contact} from "../app";
import {select} from "ng2-redux";
import {ContactsActions} from "../actions/ContactsActions";
import {Observable} from "rxjs";
import {CurrentContactActions} from "../actions/CurrentContactActions";
import {Router} from "@angular/router";

@Component({
  selector: 'contacts',
  templateUrl: 'contacts.html'
})
export class ContactsComponent implements OnInit {

   @select() contacts$: Observable<Contact[]>;
   contacts: Contact[];

   constructor(private contactActions: ContactsActions,
               private currentContactActions: CurrentContactActions,
               private router: Router) {

   }

   ngOnInit() {
     this.contactActions.fetch();
     this.contacts$.subscribe(contacts => this.contacts = contacts);
   }

   setContact(contact: Contact) {
     this.currentContactActions.changeContact(contact);
     this.router.navigate(['/contact', contact._id])
   }

}
