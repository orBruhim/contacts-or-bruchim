import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from './contact-details.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: '', component: ContactDetailsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class ContactDetailsModule { }
