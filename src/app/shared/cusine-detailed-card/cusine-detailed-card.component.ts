import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cusine-detailed-card',
  templateUrl: './cusine-detailed-card.component.html',
  styleUrls: ['./cusine-detailed-card.component.scss'],
})
export class CusineDetailedCardComponent  implements OnInit {
  @Input() item = {
    imgSrc: 'cusine-detailed-big.png',
    name: 'Chicken Menu',
    nutrition: '234 kcal',
    price: '$32.00'
  };
  @Input() size = 'big';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  showCusineDetails() {
    this.router.navigate(['meal']);
  }
}
