import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
    selector: 'nav-c',
    templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
    public isAdmin: boolean;
    public isLogged: boolean;
    constructor(private _currentUser: CurrentUserService) {

    }

    public ngOnInit() {
        this.isLogged = this._currentUser.isLogged;
        this.isAdmin = this._currentUser.isAdmin;
        this._currentUser.userObserver.subscribe(user => {
            this.isLogged = user != null; 
        });
    }
}
