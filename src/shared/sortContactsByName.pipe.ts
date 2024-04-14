import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../app/app.interface";
@Pipe({
    name: 'sortContactsByName'
})
export class SortContactsByNamePipe implements PipeTransform {
    transform(contacts: Contact[] | undefined): Contact[] {
        if(!contacts) {
            return []
        }
        return contacts.sort((a, b) => a.name.localeCompare(b.name));
    }
}
