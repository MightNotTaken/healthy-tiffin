import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurMenusPageRoutingModule } from './our-menus-routing.module';

import { OurMenusPage } from './our-menus.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OurMenusPageRoutingModule
  ],
  declarations: [OurMenusPage]
})
export class OurMenusPageModule {}
