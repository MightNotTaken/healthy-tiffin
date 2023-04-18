import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent  implements OnInit {
  @Input() data = {
    name: 'Sea Restaurant',
    imgSrc: 'home rest-1.png',
    priceRange: '$45 - $120',
    distance: '1.9km',
    type: 'Restaurant'
  };
  constructor(
    private router: Router
  ) { }

  ngOnInit() {}
  
  openRestaurantDetails() {
    this.router.navigate(['venue-main'], {
      queryParams: {
        data: JSON.stringify(this.data)
      }
    });
  }
}
