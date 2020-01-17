import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirePlansPage } from './fire-plans.page';

const routes: Routes = [
  {
    path: '',
    component: FirePlansPage
  },
  {
    path: 'new-plan',
    loadChildren: () => import('./new-plan/new-plan.module').then( m => m.NewPlanPageModule)
  },
  {
    path: ':planname',
    loadChildren: () => import('./plan-detail/plan-detail.module').then( m => m.PlanDetailPageModule)
  },
  {
    path: 'add-fire-unit/:planname',
    loadChildren: () => import('./add-fire-unit/add-fire-unit.module').then( m => m.AddFireUnitPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirePlansPageRoutingModule {}
