import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  venueTypes = [
    {
      text: 'Restaurants',
      active: true
    },
    {
      text: 'Cafeterias',
      active: false
    },
    {
      text: 'Bars & Discos',
      active: false
    }
  ];
  venues = [
    {
      name: 'Sea Restaurant',
      imgSrc: 'home rest-1.png',
      priceRange: '$45 - $120',
      distance: '1.9 km',
      type: 'Restaurant'
    },
    {
      name: 'Bay Leaf',
      imgSrc: 'home rest-2.png',
      priceRange: '$100 - $220',
      distance: '1 km',
      type: 'Restaurant'
    },
    {
      name: 'Grill In Cafe',
      imgSrc: 'home rest-1.png',
      priceRange: '$40 - $90',
      distance: '1.5 km',
      type: 'Cafeteria'
    },
    {
      name: 'Gasha Centeen',
      imgSrc: 'home rest-2.png',
      priceRange: '$45 - $120',
      distance: '1.9 km',
      type: 'Hatti'
    }
  ];
  constructor(
    private router: Router
  ) {
  }
  loadVenue(index: number) {
    for (let i=0; i<this.venues.length; i++) {
      this.venueTypes[i].active = i === index;
    }
  }
}
