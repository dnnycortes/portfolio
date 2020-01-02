import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { AboutComponent } from './components/about/about.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioService } from './services/portfolio.service';
import { AboutService } from './services/about.service';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectDialogComponent } from '../shared/components/project-dialog/project-dialog.component';
import { MaterialModule } from '../shared/modules/material.module';


@NgModule({
    imports: [
        CommonModule,
        HomeRouting,
        MaterialModule
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        HeroImageComponent,
        PortfolioComponent,
        ContactComponent,
        ProjectDialogComponent
    ],
    providers: [
        PortfolioService,
        AboutService
    ],
    entryComponents: [
        ProjectDialogComponent
    ]
})


export class HomeModule { }
