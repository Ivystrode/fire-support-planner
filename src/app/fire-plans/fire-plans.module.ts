import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirePlansPageRoutingModule } from './fire-plans-routing.module';

import { FirePlansPage } from './fire-plans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirePlansPageRoutingModule
  ],
  declarations: [FirePlansPage]
})
export class FirePlansPageModule {}
