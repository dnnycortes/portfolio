import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioAdminComponent } from './portfolio-admin.component';
import { PortfolioAdminRouting } from './portfolio-admin.routing';
import { MaterialModule } from '../shared/modules/material.module';
import { AdminHeaderComponent } from './components/header/admin-header.component';


@NgModule({
    imports: [
        CommonModule,
        PortfolioAdminRouting,
        MaterialModule
    ],
    declarations: [
        PortfolioAdminComponent,
        AdminHeaderComponent
    ]
})


export class PortfolioAdminModule { }
