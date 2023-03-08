import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ChipComponent } from './chip/chip.component';
import { VenueFiguresComponent } from './venue-figures/venue-figures.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ChipComponent,
    VenueFiguresComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    ChipComponent,
    VenueFiguresComponent
  ]
})
export class SharedModule { }
