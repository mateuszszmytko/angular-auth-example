import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { AdminHomePage } from './pages/admin-home.page';
import { AdminRoutingModule } from './admin.routes';
import { UsersService } from './services/users.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@raa/angular-auth';


@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [AdminHomePage],
  providers: [UsersService]
})
export class AdminModule { }
