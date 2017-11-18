import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomePage } from './pages/admin-home.page';


const adminRoutes: Routes = [
	{ path: '',  redirectTo: 'home'  },
    { path: 'home',  component: AdminHomePage }
	
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
