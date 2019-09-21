import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatMenuModule
    ],
    exports: [
        MatDialogModule,
        MatMenuModule
    ]
})


export class MaterialModule { }
