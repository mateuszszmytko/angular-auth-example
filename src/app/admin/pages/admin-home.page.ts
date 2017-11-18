import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../services/users.service';
import { ReturnUserDto } from 'app/admin/models/returnUserDto';
import { UpdateUserDto } from 'app/admin/models/updateUserDto';


@Component({
    templateUrl: './admin-home.page.html'
})
export class AdminHomePage {
    public users: Array<ReturnUserDto>
    constructor(private _usersService: UsersService) {

    }

    async ngOnInit(): Promise<void> {
        await this.refreshUsers();
        console.log(this.users);
    }

    async removeUser(id: string): Promise<void> {
        await this._usersService.removeUser(id);
    }

    async confirmEmail(id: string): Promise<void> {
        await this._usersService.confirmUserEmail(id);
        await this.refreshUsers();
    }

    private async refreshUsers(): Promise<void> {
        try {
            this.users = await this._usersService.getUsers();
        } catch(e) {
            console.log(e);
        }
    }
   
}