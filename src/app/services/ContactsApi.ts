import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Contact} from "../app";
import {Observable} from "rxjs";

@Injectable()
export class ContactsApi {
  private BASE_URL = 'http://localhost:3000/contacts';
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: Http) {}

  get(): Observable<Contact[]> {
    return this.http.get(this.BASE_URL, {headers: this.headers}).map(resp => resp.json());
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get(this.BASE_URL + '/' + id, {headers: this.headers}).map(resp => resp.json());
  }

  post(contact: Contact): Observable<Contact> {
    return this.http.post(this.BASE_URL, contact, {headers: this.headers}).map(resp => resp.json());
  }

  put(contact: Contact): Observable<any> {
    return this.http.put(this.BASE_URL + '/' + contact._id, contact, {headers: this.headers})
      .filter(resp=> resp.status == 204);
  }

  delete(id: string) {
    return this.http.delete(this.BASE_URL + '/' + id, {headers: this.headers})
      .filter(resp => resp.status == 204);
  }
}
