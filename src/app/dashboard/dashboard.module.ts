import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { DashboardHomePage }    from './pages/home/home.page';


import { DashboardRoutingModule } from './dashboard.routes';
import { SecretPage } from './pages/secret/secret.page';
import { SharedModule } from 'app/shared/shared.module';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessagesService } from './services/messages.service';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: [
    DashboardHomePage,
    SecretPage,
    MessagesListComponent,
    MessageFormComponent,
    MessagesComponent
  ],
  providers: [
    MessagesService
  ]
})
export class DashboardModule {}
