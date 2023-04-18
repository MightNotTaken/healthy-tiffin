import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-menus',
  templateUrl: './our-menus.page.html',
  styleUrls: ['./our-menus.page.scss'],
})
export class OurMenusPage implements OnInit {
  headerData = {
    text: 'See Our Menus',
    left: {
      icon: 'arrow-back',
      handler: () => {
        this.router.navigate(['venue-main']);
      }
    },
    right: {
      icon: 'menu',
      handler: () => {
        this.router.navigate(['today-menu'], {
          queryParams: {
            data: ''
          }
        })
      }
    },
    color: 'dark',
    bgColor: 'light'
  };
  menus = [
    {
      text: 'Breakfast',
      active: false
    },
    {
      text: 'Lunch',
      active: true
    },
    {
      text: 'Dinner',
      active: false
    }
  ];

  items = [
    {
      imgSrc: 'fish.png',
      name: 'Chicken Menu',
      nutrition: '234 kcal',
      price: '$32.00',
      size: 'small'
    },
    {
      imgSrc: 'fish.png',
      name: 'Chicken Menu',
      nutrition: '234 kcal',
      price: '$32.00',
      size: 'small'
    },
    {
      imgSrc: 'fish.png',
      name: 'Chicken Menu',
      nutrition: '234 kcal',
      price: '$32.00',
      size: 'small'
    },
    {
      imgSrc: 'fish.png',
      name: 'Chicken Menu',
      nutrition: '234 kcal',
      price: '$32.00',
      size: 'small'
    },
    {
      imgSrc: 'fish.png',
      name: 'Chicken Menu',
      nutrition: '234 kcal',
      price: '$32.00',
      size: 'small'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  loadMenu(index: number) {
    let i = 0;
    for (let menu of this.menus) {
      menu.active = i === index;
      i++;
    }
  }

}
