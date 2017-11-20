import { Injectable, Inject } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { JwtHelper } from 'angular2-jwt';
import { CurrentUserService } from '../services/current-user.service';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private _currentUserService: CurrentUserService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {        
        if(this._currentUserService.isAdmin) {
            return true;
        }

        this.router.navigate(
            ['/']
        );
        return false;
    }
}