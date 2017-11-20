import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from '@raa/angular-auth';


import { NavComponent } from './components/nav/nav.component';
import { SharedModule } from 'app/shared/shared.module';
import { AccountPage } from './pages/account.page';
import { DashboardPage } from './pages/dashboard.page';
import { AuthService } from './services/auth.service';
import { CurrentUserService } from './services/current-user.service';
import { AdminGuard } from './guards/admin.guard';


@NgModule({
	imports: [
		SharedModule, 
		AuthModule.configure({
			authenticationService: AuthService,
			fallbackPageUrl: '/account/login'
		})
	],
	declarations: [NavComponent, AccountPage, DashboardPage],
	exports: [NavComponent],
	providers: [
		AdminGuard,
		{ provide: 'API_URL', useValue: 'http://raa-restful.azurewebsites.net/api'},
		CurrentUserService
	]
})
export class CoreModule {
	constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
		  throw new Error(
			'CoreModule is already loaded. Import it in the AppModule only');
		}
	}
}
