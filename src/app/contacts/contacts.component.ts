import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ContactsService} from "./contacts.service";
import {Router} from "@angular/router";
import { forkJoin, switchMap, tap} from "rxjs";
import {Contact} from "../app.interface";

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class ContactsComponent {

    contacts$ = this.contactsService.getContacts();

    constructor(private contactsService: ContactsService, private router: Router) {
    }

    trackByName(index: number, item: any): string {
        return item.name;
    }

    navigateToContactDetails(id: string): void {
        this.router.navigate(['/contacts', id]);
    }

    navigateToAddContact(): void {
        this.router.navigate(['/add']);
    }

    generateRandomContact(): void {
        const observables$ = [];
        for (let i = 0; i < 10; i++) {
            const obs$ = this.contactsService.generateRandomContacts().pipe(
                switchMap((data) => {
                    const {name, location, email, phone, cell, picture, registered, id} = data.results[0]
                    const {street} = location;
                    const randomcontact: Contact = {
                        id: id.value ? id.value : phone,
                        name: name.first + ' ' + name.last,
                        full_address: street.name + ' ' + street.number,
                        email,
                        phone,
                        cell,
                        registration_date: street.postcode,
                        age: registered.age,
                        image: picture.medium,
                    }
                    return this.contactsService.addContact(randomcontact)
                }));
            observables$.push(obs$);
        }
        forkJoin(observables$).pipe(
            tap(() => {
             this.contacts$=  this.contactsService.getContacts();
            })
        ).subscribe()
    }
}
