import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireMissionsPageRoutingModule } from './fire-missions-routing.module';

import { FireMissionsPage } from './fire-missions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FireMissionsPageRoutingModule
  ],
  declarations: [FireMissionsPage]
})
export class FireMissionsPageModule {}
