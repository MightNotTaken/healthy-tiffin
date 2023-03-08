import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'venue-main',
    loadChildren: () => import('./pages/venue-main/venue-main.module').then( m => m.VenueMainPageModule)
  },
  {
    path: 'today-menu',
    loadChildren: () => import('./pages/today-menu/today-menu.module').then( m => m.TodayMenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
