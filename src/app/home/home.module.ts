import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RestaurantCardComponent } from '../pages/home/restaurant-card/restaurant-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    RestaurantCardComponent
  ]
})
export class HomePageModule {}
