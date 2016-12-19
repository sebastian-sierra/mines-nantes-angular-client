export interface AppState {
  currentContact: Contact,
  contacts: Contact[]
}

export interface ContactAction {
  type: string,
  payload: Contact
}

export interface ContactsAction {
  type: string,
  payload: Contact | Contact[] | string
}


export interface Contact {
  _id?: string
  name: string,
  lastName: string,
  age?: number,
  phoneNumber?: string,
  email?: number
}
