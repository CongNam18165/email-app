import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreferencesComponent } from './preferences/preferences.component';

const preferencesRoutes: Routes = [
  {path:"",component: PreferencesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(preferencesRoutes)],
  exports: [RouterModule]
})
export class preferencesRoutingModule { }