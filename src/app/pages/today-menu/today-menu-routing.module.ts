import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayMenuPage } from './today-menu.page';

const routes: Routes = [
  {
    path: '',
    component: TodayMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayMenuPageRoutingModule {}
