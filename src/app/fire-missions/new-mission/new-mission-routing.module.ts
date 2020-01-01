import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMissionPage } from './new-mission.page';

const routes: Routes = [
  {
    path: '',
    component: NewMissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMissionPageRoutingModule {}
