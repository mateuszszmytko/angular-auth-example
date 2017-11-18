import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthInterceptor } from '@raa/angular-auth';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

import { ContentInterceptor } from './interceptors/content.interceptor';

@NgModule({
	declarations: [
		LoginFormComponent, RegisterFormComponent
	],
	imports: [
		RouterModule,
		CommonModule,
		FormsModule,
		HttpClientModule
	],
	exports: [
		DatePipe, LoginFormComponent, RegisterFormComponent,
		CommonModule, RouterModule, HttpClientModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		}, 
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ContentInterceptor,
			multi: true,
		},
	]
})
export class SharedModule { }
