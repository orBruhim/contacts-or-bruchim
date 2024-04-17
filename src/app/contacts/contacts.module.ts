import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ContactsComponent} from "./contacts.component";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  { path: '', component: ContactsComponent, pathMatch: 'full' },
];
@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class ContactsModule { }
