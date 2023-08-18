import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { preferencesRoutingModule } from './preferences-routing.module';
import { PreferencesComponent } from './preferences/preferences.component';



@NgModule({
  declarations: [
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    preferencesRoutingModule
  ]
})
export class PreferencesModule { }
