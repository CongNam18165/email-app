import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { MessListComponent } from './mess-list/mess-list.component';
import { MessDetailComponent } from './mess-detail/mess-detail.component';
import { MessInfoComponent } from './mess-info/mess-info.component';

const messRoutes: Routes = [
  {
    path: "",
    component: MessagesComponent,
    children: [
      {
        path: "",
        component: MessListComponent,
        children: [
          {
            path: ":id",
            component: MessDetailComponent,
            outlet: "outlet1",
            // children: [
            //   {
            //     path: ":info",
            //     component: MessInfoComponent,
            //     outlet: "outlet2"
            //   }
            // ]
          },
          {
            path: ":info",
            component: MessInfoComponent,
            outlet: "outlet2",
          }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(messRoutes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }