import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurMenusPageRoutingModule } from './our-menus-routing.module';

import { OurMenusPage } from './our-menus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurMenusPageRoutingModule
  ],
  declarations: [OurMenusPage]
})
export class OurMenusPageModule {}
