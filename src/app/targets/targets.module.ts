import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TargetsPageRoutingModule } from './targets-routing.module';

import { TargetsPage } from './targets.page';
import { SharedModule } from '../shared/shared.module';
import { TargetPreviewComponent } from './target-preview/target-preview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TargetsPageRoutingModule,
    SharedModule
  ],
  declarations: [TargetsPage, TargetPreviewComponent],
  exports: [TargetPreviewComponent],
  entryComponents: [TargetPreviewComponent]
})
export class TargetsPageModule {}
