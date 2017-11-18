import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardHomePage } from './pages/home/home.page';
import { SecretPage } from './pages/secret/secret.page';
import { AuthGuard } from '@raa/angular-auth';

const dashboardRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardHomePage },
    { path: 'secret', component: SecretPage/*, canActivate: [AdminGuard]*/ }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
