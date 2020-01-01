import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireMissionsPage } from './fire-missions.page';

const routes: Routes = [
  {
    path: '',
    component: FireMissionsPage
  },
  {
    path: 'mission-detail',
    loadChildren: () => import('./mission-detail/mission-detail.module').then( m => m.MissionDetailPageModule)
  },
  {
    path: 'new-mission',
    loadChildren: () => import('./new-mission/new-mission.module').then( m => m.NewMissionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireMissionsPageRoutingModule {}
