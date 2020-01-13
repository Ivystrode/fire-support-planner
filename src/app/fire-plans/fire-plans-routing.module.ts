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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirePlansPageRoutingModule {}
