import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRouting } from './login.routing';
import { LoginComponent } from './login.component';


@NgModule({
    imports: [
        CommonModule,
        LoginRouting,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent
    ]
})


export class LoginModule {}
