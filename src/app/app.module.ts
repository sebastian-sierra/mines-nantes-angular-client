import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ContactsComponent} from "./containers/contacts";
import {NavBarComponent} from "./containers/nav-bar";
import {EditContactComponent} from "./containers/edit.contact";
import {AppRoutingModule} from "./app.routing";
import {ContactsActions} from "./actions/ContactsActions";
import {NgRedux, NgReduxModule} from "ng2-redux";
import {AppState} from "./app";
import rootReducer from "./store/index";
import {ContactsApi} from "./services/ContactsApi";
import {ContactComponent} from "./containers/contact";
import {CurrentContactActions} from "./actions/CurrentContactActions";
import {ContactResolve} from "./services/ContactResolve";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactsComponent,
    ContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgReduxModule.forRoot()
  ],
  providers: [
    ContactsActions,
    CurrentContactActions,
    ContactsApi,
    ContactResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<AppState>) {
    this.ngRedux.configureStore(rootReducer, {
      currentContact: null,
      contacts: []
    })
  }

}
