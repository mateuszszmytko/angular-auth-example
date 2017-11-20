import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from 'app/dashboard/services/messages.service';
import { IMessage } from 'app/dashboard/interfaces/message.interface';

@Component({
  selector: 'messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {

  @Input() public messages: Array<IMessage> = new Array();

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
