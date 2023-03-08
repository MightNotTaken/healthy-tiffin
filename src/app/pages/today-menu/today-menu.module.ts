import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayMenuPageRoutingModule } from './today-menu-routing.module';

import { TodayMenuPage } from './today-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayMenuPageRoutingModule
  ],
  declarations: [TodayMenuPage]
})
export class TodayMenuPageModule {}
