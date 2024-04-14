import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactDetailsModule} from "./contact-details/contact-details.module";
import {EditAddContactModule} from "./edit-add-contact/edit-add-contact.module";


const routes: Routes = [
  {
    path: 'contacts',
    loadChildren: () =>
        import('./contacts/contacts.module').then(({ ContactsModule }) => ContactsModule),
  },
  {
    path: 'add',
    loadChildren: () =>
        import('./edit-add-contact/edit-add-contact.module').then(({ EditAddContactModule }) => EditAddContactModule),
  },
  {
    path: 'contacts/:name',
    loadChildren: () =>
        import('./contact-details/contact-details.module').then(({ ContactDetailsModule }) => ContactDetailsModule),
  },
  {
    path: 'edit/:name',
    loadChildren: () =>
        import('./edit-add-contact/edit-add-contact.module').then(({ EditAddContactModule }) => EditAddContactModule),
  },
  { path: '**', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
