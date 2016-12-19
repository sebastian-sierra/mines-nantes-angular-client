import {Injectable} from "@angular/core";
import {Resolve, Router, ActivatedRouteSnapshot} from "@angular/router";
import {Contact, AppState} from "../app";
import {NgRedux} from "ng2-redux";
import {CurrentContactActions} from "../actions/CurrentContactActions";

@Injectable()
export class ContactResolve implements Resolve<Contact> {

  constructor(private ngRedux: NgRedux<AppState>,
              private currentContactActions: CurrentContactActions) {}


  resolve(route: ActivatedRouteSnapshot): boolean {
    let id = route.params['id'];

    if(id && !this.ngRedux.getState().currentContact) {
      this.currentContactActions.retrieveContact(id);
    } else if(!id) {
      this.currentContactActions.changeContact();
    }

    return true;
  }
}
