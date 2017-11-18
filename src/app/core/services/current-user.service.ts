import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

import { AuthenticationService, TokenStorageService, AuthenticateResponseStatus } from '@raa/angular-auth';

import { User } from '../models/user.model';
import { LoginData } from '../models/loginData.model';
import { RegisterData } from '../models/registerData.model';
import { IDecodedToken } from '../interfaces/decodedToken.interface';



@Injectable()
export class CurrentUserService {    
	
	public get isLogged(): boolean { return !!this._auth.isAuthenticated; }
	public get isAdmin(): boolean { return this.userData.roles && this.userData.roles.indexOf("ADMIN") >= 0; }
	public get userData(): User { return this._userData; }
	public get userObserver(): Subject<User> { return this._userEmmiter;}

	private _userData: User = new User();
	private _userEmmiter: Subject<User> = new Subject<User>();

	constructor(private _tokenStorageService: TokenStorageService,
				private _auth: AuthenticationService,
				private _http: HttpClient) {

		if(this._auth.isAuthenticated) {
			this.decodeUser();
		}
	}

	public async loginAsync(model: LoginData): Promise<AuthenticateResponseStatus> {
		let status = await this._auth.authenticateAsync(model);
		
		if(status == AuthenticateResponseStatus.Success) {
			this.decodeUser();
			this._userEmmiter.next(this._userData);
		}
		console.log(status);
		return status;		
	}

	public async registerAsync(model: RegisterData): Promise<boolean> {
		//await this._auth.createAndAuthorize(model);
		const tokenResult: any = await this._http.post
			('http://localhost:52217/api/auth/register', JSON.stringify(model))
			.toPromise(); 

		this._tokenStorageService.token = tokenResult.token;
		
		this.decodeUser();
		this._userEmmiter.next(this._userData);
        return true;
	}

	public logout(): void {
		this._tokenStorageService.clear();
		this._userData = null;
		
		this._userEmmiter.next(this._userData);
	}

	public decodeUser(): void {
		const decodedToken: IDecodedToken = this._tokenStorageService.getDecodedToken<IDecodedToken>();
		this._userData = new User();

		this._userData.email = decodedToken.email;
		this._userData.username = decodedToken.unique_name;
		this._userData.id = decodedToken.sub;
		this._userData.roles = typeof decodedToken.roles === 'string'? [decodedToken.roles]: decodedToken.roles;
	}
}



