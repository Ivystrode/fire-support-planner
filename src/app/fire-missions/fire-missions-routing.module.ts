import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireMissionsPage } from './fire-missions.page';

const routes: Routes = [
  {
    path: '',
    component: FireMissionsPage
  },
  {
    path: 'new-mission',
    loadChildren: () => import('./new-mission/new-mission.module').then( m => m.NewMissionPageModule)
  },
  {
    path: ':target',
    loadChildren: () => import('./mission-detail/mission-detail.module').then( m => m.MissionDetailPageModule)
  },
  // {path: 'fire-missions',
  // children: [
  //   {
  //     path: '',
  //     loadChildren: './fire-missions/fire-missions.module#FireMissionsPageModule'
  //   },
  //   {
  //     path: 'new-mission',
  //     loadChildren: './fire-missions/new-mission/new-mission.module#NewMissionPageModule'
  //   },
  //   {
  //     path: ':missionId',
  //     loadChildren: './fire-missions/mission-detail/mission-detail.module#MissionDetailPageModule'
  //   }
  // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireMissionsPageRoutingModule {}
