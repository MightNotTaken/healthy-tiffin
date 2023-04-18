import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition-chip',
  templateUrl: './nutrition-chip.component.html',
  styleUrls: ['./nutrition-chip.component.scss'],
})
export class NutritionChipComponent  implements OnInit {
  @Input() data = {
    amount: 234,
    unit: 'kcal',
    nutrient: 'Calories'
  };
  
  constructor() { }

  ngOnInit() {}

}
