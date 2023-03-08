import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenueMainPage } from './venue-main.page';

const routes: Routes = [
  {
    path: '',
    component: VenueMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenueMainPageRoutingModule {}
