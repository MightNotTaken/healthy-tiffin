import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cusine-card',
  templateUrl: './cusine-card.component.html',
  styleUrls: ['./cusine-card.component.scss'],
})
export class CusineCardComponent  implements OnInit {
  @Input() classes = '';
  @Input() showButton = true;
  @Input() data = {
    title: 'Green Salad',
    subTitle: 'Vegetarian Pizza',
    price: '$8.0'
  };
  
  constructor() { }

  ngOnInit() {}

}
