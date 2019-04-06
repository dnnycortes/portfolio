import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioAdminComponent } from './portfolio-admin.component';


const PORTFOLIO_ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: PortfolioAdminComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forChild( PORTFOLIO_ADMIN_ROUTES )
    ],
    exports: [
        RouterModule
    ]
})


export class PortfolioAdminRouting {}