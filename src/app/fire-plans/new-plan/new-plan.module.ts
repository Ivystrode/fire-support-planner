import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPlanPageRoutingModule } from './new-plan-routing.module';

import { NewPlanPage } from './new-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPlanPageRoutingModule
  ],
  declarations: [NewPlanPage]
})
export class NewPlanPageModule {}
