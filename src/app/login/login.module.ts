import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRouting } from './login.routing';
import { LoginComponent } from './login.component';


@NgModule({
    imports: [
        CommonModule,
        LoginRouting
    ],
    declarations: [
        LoginComponent
    ]
})


export class LoginModule {}
