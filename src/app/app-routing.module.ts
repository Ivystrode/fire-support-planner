import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'fire-missions',
    loadChildren: () => import('./fire-missions/fire-missions.module').then( m => m.FireMissionsPageModule)
  },
  {
    path: 'fire-plans',
    loadChildren: () => import('./fire-plans/fire-plans.module').then( m => m.FirePlansPageModule)
  }
  // {path: 'home', loadChildren: './home/home.module#HomePageModule'},
  // {path: 'auth', loadChildren: './auth/auth.module#AuthPageModule'},
  // {path: 'fire-missions', loadChildren: './fire-missions/fire-missions.module#FireMissionsPage'},
  // {path: 'fire-plans', loadChildren: './fire-plans/fire-plans.module#FirePlansPage'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
