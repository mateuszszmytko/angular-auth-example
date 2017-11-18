import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AuthenticationService } from '@raa/angular-auth';
import { Observable } from 'rxjs/Observable';
import { ITokenResult } from '../interfaces/tokenResult.interface';


@Injectable()
export class AuthService extends AuthenticationService {    
	protected sendTokenRequest(authenticationModel: any): Observable<string> {
		return this._http.post<ITokenResult>('http://localhost:52217/api/auth/token', JSON.stringify(authenticationModel))
			.map(response => {
				return response.token;
			});
	}
	

}



