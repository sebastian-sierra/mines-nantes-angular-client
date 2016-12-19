import {Routes, RouterModule} from "@angular/router";
import {EditContactComponent} from "./containers/edit.contact";
import {NgModule} from "@angular/core";
import {ContactComponent} from "./containers/contact";
import {ContactResolve} from "./services/ContactResolve";

const routes: Routes = [
  {path: '',  redirectTo: '/contact', pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, resolve: {contact: ContactResolve}},
  {path: 'contact/:id', component: ContactComponent, resolve: {contact: ContactResolve}},
  {path: 'edit', component: EditContactComponent, resolve: {contact: ContactResolve}},
  {path: 'edit/:id', component: EditContactComponent, resolve: {contact: ContactResolve}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
