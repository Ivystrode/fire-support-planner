import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanDetailPageRoutingModule } from './plan-detail-routing.module';

import { PlanDetailPage } from './plan-detail.page';
import { TargetPreviewComponent } from '../../targets/target-preview/target-preview.component';
import { TargetsPageModule } from 'src/app/targets/targets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanDetailPageRoutingModule,
    TargetsPageModule
  ],
  declarations: [PlanDetailPage]
})
export class PlanDetailPageModule {}
