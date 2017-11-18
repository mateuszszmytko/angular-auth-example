import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CurrentUserService } from '../../../core/services/current-user.service';
import { LoginData } from '../../../core/models/loginData.model';
import { AuthenticateResponseStatus } from '@raa/angular-auth';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    public model: LoginData = new LoginData();
    public processing: boolean = false;

    public returnUrl: string;
    public error: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _currentUser: CurrentUserService) { }

    ngOnInit() {
        console.log(this.model.password);
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    async login() {
        this.processing = true;

        const responseStatus = await this._currentUser.loginAsync(this.model);
        if(responseStatus == AuthenticateResponseStatus.Success) {
            this.router.navigateByUrl(this.returnUrl);
        } else {
            this.error = responseStatus == AuthenticateResponseStatus.Unauthorized? 
                "Wrong password or login.":
                "Unexpected error. Try again leter."
        }
    
        this.processing = false;

    }

}
