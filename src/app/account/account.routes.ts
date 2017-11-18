import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@raa/angular-auth';

import { ManagePage } from './pages/manage/manage.page';
import { LogoutPage } from './pages/logout/logout.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';





const accountRoutes: Routes = [
	{ path: '',  redirectTo: 'manage'  },
    { path: 'manage', component: ManagePage, canActivate: [AuthGuard] },
    { path: 'logout', component: LogoutPage, canActivate: [AuthGuard] },
    { path: 'login', component: LoginPage },
    { path: 'register', component: RegisterPage }
	
];

@NgModule({
    imports: [
        RouterModule.forChild(accountRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule { }
