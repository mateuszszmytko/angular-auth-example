import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { CurrentUserService } from 'app/core/services/current-user.service';
import { User } from 'app/core/models/user.model';


@Component({
    templateUrl: './manage.page.html'
})
export class ManagePage {
    public user: User;

    constructor(private _currentUser: CurrentUserService) {
        this.user = _currentUser.userData;
            
     }

   
}