import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

import { ReturnUserDto } from '../models/returnUserDto';
import { UpdateUserDto } from 'app/admin/models/updateUserDto';


@Injectable()
export class UsersService {
    
    constructor(private http: HttpClient, @Inject('API_URL') public apiUrl: string) {  }


    public async getUsers(): Promise<Array<ReturnUserDto>> {
		const result: Array<ReturnUserDto> = await this.http.get<Array<ReturnUserDto>>(this.apiUrl+'/users')
			.toPromise(); 
	
		return result;
	}

	public async removeUser(id: string): Promise<void> {
		await this.http.delete<Array<ReturnUserDto>>(this.apiUrl+'/users/'+id)
			.toPromise();
	}

	public async confirmUserEmail(id: string): Promise<void> {
		const updateUserDto = new UpdateUserDto();
		updateUserDto.emailConfirmed = true;
		
		await this.updateUser(id, updateUserDto)
	}

	private async updateUser(id: string, model: UpdateUserDto): Promise<void>  {
		const patchBody = this.patchBodyGenerator(model),
			headers = new HttpHeaders();
		
		headers.set('Content-type', 'application/json-patch+json');

		await this.http.patch(this.apiUrl+'/users/'+id, patchBody, {headers: headers})
			.toPromise();
	}

	private patchBodyGenerator(model: UpdateUserDto): Array<{ op: string, path: string, value: string }> {
		let patchBody: Array<{ op: string, path: string, value: string }> = [];
		for(let variable in model) {
			if(model[variable] == null) continue;

			patchBody.push({
				op: "add",
				path: "/"+variable.toLocaleLowerCase(),
				value: model[variable]
			})
		}

		return patchBody;
	}

}