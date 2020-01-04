import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMissionPageRoutingModule } from './new-mission-routing.module';

import { NewMissionPage } from './new-mission.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMissionPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [NewMissionPage]
})
export class NewMissionPageModule {}
