import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../contacts/contacts.service";
import {Subscription, switchMap, tap} from "rxjs";
import {Contact} from "../app.interface";

@Component({
    selector: 'app-edit-add-contact',
    templateUrl: './edit-add-contact.component.html',
    styleUrls: ['./edit-add-contact.component.scss']
})
export class EditAddContactComponent implements OnInit, OnDestroy {
    contactForm!: FormGroup;
    editContact: Contact | null = null;
    subscriptions = new Subscription();
    isFormValid = true;

    constructor(private fb: FormBuilder,
                private activatedRoute: ActivatedRoute,
                private contactsService: ContactsService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.initializeForm();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    onSubmit(): void {
        if (this.contactForm.valid) {
            this.isFormValid = true;
            this.saveContactAndRedirect();

        } else {
            this.isFormValid = false;
        }
    }

    private initializeForm(): void {
        const sub = this.activatedRoute.params.pipe(
            switchMap((params) => {
                return this.contactsService.getContactById(params['id'])
            }),
            tap((contact: any) => {
                console.log(contact[0])
                this.editContact = contact[0];
                this.contactForm = this.fb.group({
                    name: [this.editContact ? this.editContact.name : '', Validators.required],
                    full_address: [this.editContact ? this.editContact.full_address : '', Validators.required],
                    email: [this.editContact ? this.editContact.email : '', [Validators.required, Validators.email]],
                    phone: [this.editContact ? +this.editContact.phone.replace(/-/g, '') : '', Validators.required],
                    cell: [this.editContact ? +this.editContact.cell.replace(/-/g, '') : ''],
                    registration_date: [this.editContact ? this.editContact.registration_date : '', Validators.required],
                    age: [this.editContact ? this.editContact.age : null, [Validators.required, Validators.min(0)]],
                    image: [this.editContact ? this.editContact.image : ''],
                    isFavorite: [this.editContact ? this.editContact.isFavorite : false]
                });

            })
        ).subscribe();
        this.subscriptions.add(sub);
    }


    private saveContactAndRedirect(): void {
        const newContact = {
            ...this.editContact,
            ...this.contactForm.value
        }

        this.editContact ? this.contactsService.updateContact(newContact).subscribe(() => {
            this.router.navigate(['contacts', this.editContact?.id])
        }) : this.contactsService.addContact(this.contactForm.value).subscribe(() => {
            this.router.navigate(['contacts'])
        });
    }

    backNavigation(): void {
        if (this.editContact) {
            this.router.navigate(['contacts', this.editContact?.id])
        } else {
            this.router.navigate(['contacts'])
        }
    }
}
