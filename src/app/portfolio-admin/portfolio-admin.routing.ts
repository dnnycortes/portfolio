import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioAdminComponent } from './portfolio-admin.component';
import { AuthGuard } from '../shared/guards/auth.guard';


const PORTFOLIO_ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: PortfolioAdminComponent,
        canActivate: [ AuthGuard ]
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