import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioAdminComponent } from './portfolio-admin.component';
import { PortfolioAdminRouting } from './portfolio-admin.routing';


@NgModule({
    imports: [
        CommonModule,
        PortfolioAdminRouting
    ],
    declarations: [
        PortfolioAdminComponent
    ]
})


export class PortfolioAdminModule { }
