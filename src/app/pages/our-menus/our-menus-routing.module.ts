import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurMenusPage } from './our-menus.page';

const routes: Routes = [
  {
    path: '',
    component: OurMenusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurMenusPageRoutingModule {}
