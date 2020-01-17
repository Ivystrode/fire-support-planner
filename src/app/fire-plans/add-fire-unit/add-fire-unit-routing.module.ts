import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFireUnitPage } from './add-fire-unit.page';

const routes: Routes = [
  {
    path: '',
    component: AddFireUnitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFireUnitPageRoutingModule {}
