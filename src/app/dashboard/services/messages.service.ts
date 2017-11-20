import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Observable';
import { IMessage } from 'app/dashboard/interfaces/message.interface';




@Injectable()
export class MessagesService  {    
	constructor(@Inject('API_URL') private _apiUrl: string, private _http: HttpClient) {
		
	}

	getMessages(): Observable<Array<IMessage>> {
		return this._http.get<Array<IMessage>>(this._apiUrl+'/messages');
	}

	getMessagesAsync(): Promise<Array<IMessage>> {
		return this.getMessages()
			.toPromise();
	}

	addMessage(message: string): Observable<IMessage> {
		return this._http.post<IMessage>(this._apiUrl+'/messages', {message: message})
	}

	addMessageAsync(message: string): Promise<IMessage> {
		return this.addMessage(message)
			.toPromise();
	}

}



