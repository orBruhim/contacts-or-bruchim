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
    getContactById(id:string) :Observable<Contact> {
        return this.http.get<Contact>(`${this.contactsUrl}?id=${id}`);
    }
}
