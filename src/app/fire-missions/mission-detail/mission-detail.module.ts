import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionDetailPageRoutingModule } from './mission-detail-routing.module';

import { MissionDetailPage } from './mission-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEngagementComponent } from './add-engagement/add-engagement.component';
import { TargetsPage } from 'src/app/targets/targets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MissionDetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [MissionDetailPage, AddEngagementComponent],
  entryComponents: [AddEngagementComponent]
})
export class MissionDetailPageModule {}
