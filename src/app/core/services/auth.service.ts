import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';

import { AuthenticationService, TokenStorageService } from '@raa/angular-auth';
import { Observable } from 'rxjs/Observable';
import { ITokenResult } from '../interfaces/tokenResult.interface';



@Injectable()
export class AuthService extends AuthenticationService {    
	constructor(@Inject('API_URL') private _apiUrl: string, _http: HttpClient, _tokenStorageService: TokenStorageService) {
		super(_http, _tokenStorageService);
	}
	protected sendTokenRequest(authenticationModel: any): Observable<string> {
		return this._http.post<ITokenResult>(this._apiUrl+'/auth/token', JSON.stringify(authenticationModel))
			.map(response => {
				return response.token;
			});
	}
	

}



