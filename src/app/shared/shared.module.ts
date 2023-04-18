import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ChipComponent } from './chip/chip.component';
import { VenueFiguresComponent } from './venue-figures/venue-figures.component';
import { CusineCardComponent } from './cusine-card/cusine-card.component';
import { CusineDetailedCardComponent } from './cusine-detailed-card/cusine-detailed-card.component';
import { NutritionChipComponent } from './nutrition-chip/nutrition-chip.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ChipComponent,
    VenueFiguresComponent,
    CusineCardComponent,
    CusineDetailedCardComponent,
    NutritionChipComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    ChipComponent,
    VenueFiguresComponent,
    CusineCardComponent,
    CusineDetailedCardComponent,
    NutritionChipComponent
  ]
})
export class SharedModule { }
