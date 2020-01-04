import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionDetailPageRoutingModule } from './mission-detail-routing.module';

import { MissionDetailPage } from './mission-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [MissionDetailPage]
})
export class MissionDetailPageModule {}
