import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { AboutComponent } from './components/about/about.component';
import { CoverComponent } from './components/cover/cover.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRouting
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        CoverComponent
    ]
})


export class HomeModule { }
