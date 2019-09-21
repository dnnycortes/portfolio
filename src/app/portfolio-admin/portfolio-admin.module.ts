import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioAdminComponent } from './portfolio-admin.component';
import { PortfolioAdminRouting } from './portfolio-admin.routing';
import { MaterialModule } from '../shared/modules/material.module';


@NgModule({
    imports: [
        CommonModule,
        PortfolioAdminRouting,
        MaterialModule
    ],
    declarations: [
        PortfolioAdminComponent
    ]
})


export class PortfolioAdminModule { }
