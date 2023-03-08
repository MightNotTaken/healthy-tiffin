import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenueMainPageRoutingModule } from './venue-main-routing.module';

import { VenueMainPage } from './venue-main.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    VenueMainPageRoutingModule
  ],
  declarations: [VenueMainPage]
})
export class VenueMainPageModule {}
