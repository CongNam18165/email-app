import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { PreferencesComponent } from './preferences/preferences/preferences.component';



const routes: Routes = [
  {path:"messages",
   loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule) },
  {path:"contacts",
  loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)},
  {path:"preferences", 
  loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule)},
  { path: '',   redirectTo: '/messages', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
