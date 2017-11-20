import { Component } from '@angular/core';
import { User } from 'app/core/models/user.model';
import { CurrentUserService } from 'app/core/services/current-user.service';

@Component({
    templateUrl: './home.page.html'
})
export class DashboardHomePage {
    public user: User;
    constructor(private _userService: CurrentUserService) {
    }

    ngOnInit() {
        this.user = this._userService.userData;
    }


}
