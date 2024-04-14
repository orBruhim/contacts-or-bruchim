import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SortContactsByNamePipe} from "./sortContactsByName.pipe";
import {TitleCasePipe} from "./titleCase.pipe";

@NgModule({
    declarations: [
        SortContactsByNamePipe,
        TitleCasePipe
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SortContactsByNamePipe,
        TitleCasePipe
    ]
})
export class SharedModule { }
