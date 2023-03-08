import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayMenuPageRoutingModule } from './today-menu-routing.module';

import { TodayMenuPage } from './today-menu.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TodayMenuPageRoutingModule
  ],
  declarations: [TodayMenuPage]
})
export class TodayMenuPageModule {}
