import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessDetailComponent } from './mess-detail/mess-detail.component';
import { MessListComponent } from './mess-list/mess-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MessListService } from './mess-list.service';
import { MessagesRoutingModule } from './mess-routing.module';
import { MessDetailService } from './mess-detail.service';
import { MessInfoComponent } from './mess-info/mess-info.component';


@NgModule({
  declarations: [
    MessDetailComponent,
    MessListComponent,
    MessagesComponent,
    MessInfoComponent,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ],
  providers: [MessListService,MessDetailService],
})
export class MessagesModule { }
