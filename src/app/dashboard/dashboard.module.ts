import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { DashboardHomePage }    from './pages/home/home.page';


import { DashboardRoutingModule } from './dashboard.routes';
import { SecretPage } from './pages/secret/secret.page';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardHomePage,
    SecretPage
  ]
})
export class DashboardModule {}
