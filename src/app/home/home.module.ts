import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { AboutComponent } from './components/about/about.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRouting
    ],
    declarations: [
        HomeComponent,
        AboutComponent
    ]
})


export class HomeModule { }
