import { NgModule }       from '@angular/core';

import { AccountRoutingModule } from './account.routes';
import { SharedModule } from 'app/shared/shared.module';

import { ManagePage }    from './pages/manage/manage.page';
import { LogoutPage } from 'app/account/pages/logout/logout.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';


@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    ManagePage,
    LogoutPage,
    LoginPage,
    RegisterPage
  ]
})
export class AccountModule {}
