import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessagesService } from 'app/dashboard/services/messages.service';
import { IMessage } from 'app/dashboard/interfaces/message.interface';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  public processing: boolean = false;
  public message: string = '';

  @Output() messageSent = new EventEmitter<IMessage>();
  
  constructor(private _messagesService: MessagesService) { }

  ngOnInit() {
  }

  async sendMessage() {
    this.processing = true;

    try {
      const message = await this._messagesService.addMessageAsync(this.message);
      this.messageSent.emit(message);
    } catch(e) {
      console.log(e);
    }
    
    this.processing = false;
    this.message = '';
  }

}
