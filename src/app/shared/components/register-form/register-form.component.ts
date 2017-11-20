import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CurrentUserService } from 'app/core/services/current-user.service';
import { RegisterData } from 'app/core/models/registerData.model';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {
	model: RegisterData = new RegisterData();
	public processing: boolean = false;
	public errors: string[] = [];

	constructor(private _currentUser: CurrentUserService, private router: Router) { }

	ngOnInit() {

	}

	async register() {
		this.processing = true;
		try {
			const response = await this._currentUser.registerAsync(this.model);

			this.router.navigateByUrl('/');
		} catch(e) {

			this.errors = [];
			if(e.error)
				for(let error of e.error) {
					this.errors.push(error.description);
				}

		}

		this.processing = false;

		

	}

}
