import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanDetailPage } from './plan-detail.page';
// import { AddFireUnitModule } from '../add-fire-unit/add-fire-unit.page';

const routes: Routes = [
  {
    path: '',
    component: PlanDetailPage
  },
  {
    path: 'add-fire-unit',
    loadChildren: () => import('../add-fire-unit/add-fire-unit.module').then( m => m.AddFireUnitPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanDetailPageRoutingModule {}
