import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAddContactComponent } from './edit-add-contact.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: EditAddContactComponent, pathMatch: 'full' },
];
@NgModule({
  declarations: [
    EditAddContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EditAddContactModule { }
