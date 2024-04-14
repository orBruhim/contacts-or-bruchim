import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SortContactsByNamePipe} from "./sortContactsByName.pipe";

@NgModule({
    declarations: [
        SortContactsByNamePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SortContactsByNamePipe
    ]
})
export class SharedModule { }
