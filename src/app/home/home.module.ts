import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { AboutComponent } from './components/about/about.component';
import { CoverComponent } from './components/cover/cover.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioService } from './services/portfolio.service';
import { AboutService } from './services/about.service';


@NgModule({
    imports: [
        CommonModule,
        HomeRouting
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        CoverComponent,
        PortfolioComponent
    ],
    providers: [
        PortfolioService,
        AboutService
    ]
})


export class HomeModule { }
