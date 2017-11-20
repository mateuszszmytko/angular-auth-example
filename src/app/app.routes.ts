import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@raa/angular-auth';
import { AdminGuard } from 'app/core/guards/admin.guard';
import { AccountPage } from './core/pages/account.page';
import { DashboardPage } from './core/pages/dashboard.page';

const appRoutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        component: DashboardPage,
        canActivate: [AuthGuard]

    },
    {
		path: 'account', 
        loadChildren: 'app/account/account.module#AccountModule',
        component: AccountPage
    },
    {
		path: 'admin', 
        loadChildren: 'app/admin/admin.module#AdminModule',
        canActivate: [AdminGuard]
    },
    { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }