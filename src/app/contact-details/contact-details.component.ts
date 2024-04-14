import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ContactsService} from "../contacts/contacts.service";
import {Subscription, switchMap, tap} from "rxjs";
import {Contact} from "../app.interface";

@Component({
  selector: 'app-edit-add-contact',
  templateUrl: './edit-add-contact.component.html',
  styleUrls: ['./edit-add-contact.component.scss']
})
export class EditAddContactComponent implements OnInit, OnDestroy{
  contactForm!: FormGroup;
  editContact: Contact| null= null;
  subscriptions = new Subscription();

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    const sub = this.activatedRoute.params.pipe(
        switchMap((params) => {
          return this.contactsService.getContactById(params['id'])
        }),
        tap((contact: any) => {
          this.editContact = contact[0];
          this.contactForm = this.fb.group({
            name: [this.editContact ? this.editContact.name : '', Validators.required],
            full_address: [this.editContact ? this.editContact.full_address : '', Validators.required],
            email: [this.editContact ? this.editContact.email : '', [Validators.required, Validators.email]],
            phone: [this.editContact ? +this.editContact.phone : '', Validators.required],
            cell: [this.editContact ? +this.editContact.cell : ''],
            registration_date: [this.editContact ? this.editContact.registration_date : '', Validators.required],
            age: [this.editContact ? this.editContact.age : null, [Validators.required, Validators.min(0)]],
            image: [this.editContact ? this.editContact.image : ''],
            isFavorite: [this.editContact ? this.editContact.isFavorite : false]
          });

        })
    ).subscribe();
    this.subscriptions.add(sub);
  }

  onFileSelected(event: Event ): void {
    console.log(event.target)
    const file = event.target
    if (file) {
      // this.contactForm.patchValue({ image: file.name });
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.editContact ? this.contactsService.updateContact(this.contactForm.value) : this.contactsService.addContact(this.contactForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
