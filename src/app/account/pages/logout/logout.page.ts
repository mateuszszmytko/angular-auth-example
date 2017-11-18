import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { CurrentUserService } from 'app/core/services/current-user.service';



@Component({
    templateUrl: './logout.page.html'
})
export class LogoutPage {

    constructor(private router: Router,
        private route: ActivatedRoute,
        private _currentuser: CurrentUserService) { }

    ngOnInit() {
        this._currentuser.logout();

        this.router.navigateByUrl('/home');
    }
            
}