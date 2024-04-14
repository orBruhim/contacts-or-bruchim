import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Subscription, switchMap, tap} from "rxjs";
import {ContactsService} from "../contacts/contacts.service";
import {Contact} from "../app.interface";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy{

  subscriptions= new Subscription();
  contact!: Contact;
  constructor(private activatedRoute: ActivatedRoute, private contactsService: ContactsService) {
  }
  ngOnInit(): void {
    this.getContact();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private getContact() :void {
    const sub = this.activatedRoute.params.pipe(
        switchMap((params) => {
          return this.contactsService.getContactById(params['id'])
        }),
        tap((contact: any) => {
          this.contact= contact[0];
        })
    ).subscribe();
    this.subscriptions.add(sub);
  }

}
