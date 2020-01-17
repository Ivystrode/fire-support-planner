import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFireUnitPageRoutingModule } from './add-fire-unit-routing.module';

import { AddFireUnitPage } from './add-fire-unit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFireUnitPageRoutingModule
  ],
  declarations: [AddFireUnitPage]
})
export class AddFireUnitPageModule {}
