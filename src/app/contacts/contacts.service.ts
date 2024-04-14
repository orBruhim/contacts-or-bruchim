import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../app.interface";

@Injectable({providedIn: 'root'})

export class ContactsService {
    private contactsUrl = 'http://localhost:3000/data';

    constructor(private http: HttpClient) {
    }
    getContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.contactsUrl);
    }

    getContactByName(name:string) :Observable<Contact> {
        return this.http.get<Contact>(`${this.contactsUrl}?name=${name}`);
    }

    deleteContact(name: string) :Observable<Contact> {
        return this.http.delete<Contact>(`${this.contactsUrl}/${name}`);
    }
    addContact(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>(this.contactsUrl, contact);
    }

    updateContact(contact: Contact): Observable<Contact> {
        return this.http.put<Contact>(`${this.contactsUrl}?name=${contact.name}`, contact);
    }
}
