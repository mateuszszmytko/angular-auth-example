import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'app/dashboard/services/messages.service';
import { IMessage } from 'app/dashboard/interfaces/message.interface';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public messages: Array<IMessage> = new Array();

  constructor(private _messagesService: MessagesService) { }

  async ngOnInit() {
    let messagesFromService = await this._messagesService.getMessagesAsync();
    this.messages = messagesFromService.reverse();
    console.log(this.messages);
  }

  updateMessages(message: IMessage) {
    this.messages.unshift(message);
  }

}
