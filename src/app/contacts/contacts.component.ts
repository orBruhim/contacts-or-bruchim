import {Component} from '@angular/core';
import {ContactsService} from "./contacts.service";
import { toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  contactsSignal = toSignal(this.contactsService.getContacts());

  constructor(private contactsService:ContactsService) {
  }
  trackByName(index: number, item: any): string {
    return  item.name ;
  }

}
