import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMissionPageRoutingModule } from './new-mission-routing.module';

import { NewMissionPage } from './new-mission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMissionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewMissionPage]
})
export class NewMissionPageModule {}
