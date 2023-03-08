import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-menu',
  templateUrl: './today-menu.page.html',
  styleUrls: ['./today-menu.page.scss'],
})
export class TodayMenuPage implements OnInit {
  headerData = {
    text: 'Home',
    left: {
      icon: 'menu',
      handler: () => {
        console.log('left');
      }
    },
    color: 'dark',
    bgColor: 'light',
    right: {
      icon: 'ellipsis-vertical',
      handler: () => {
        console.log('right');
      }
    }
  };
  menu = [
    {
      title: 'Salad',
      subTitle: 'Green Salad',
      price: '$6.0'
    },
    {
      title: 'Chicken',
      subTitle: 'Chicken Fry',
      price: '$20.0'
    },
    {
      title: 'Pizza',
      subTitle: 'Vegetarian Pizza',
      price: '$8.0'
    },
    {
      title: 'Meat',
      subTitle: 'Meat Plate',
      price: '$18.0'
    },
    {
      title: 'Salad',
      subTitle: 'Green Salad',
      price: '$6.0'
    },
    {
      title: 'Chicken',
      subTitle: 'Chicken Fry',
      price: '$20.0'
    },
    {
      title: 'Pizza',
      subTitle: 'Vegetarian Pizza',
      price: '$8.0'
    },
    {
      title: 'Meat',
      subTitle: 'Meat Plate',
      price: '$18.0'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  getDisplayData(item: any): any {
    return {
      title: item.title,
      subTitle: item.subTitle,
    }
  }

}
