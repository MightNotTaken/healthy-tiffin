import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-today-menu',
  templateUrl: './today-menu.page.html',
  styleUrls: ['./today-menu.page.scss'],
})
export class TodayMenuPage implements OnInit {
  headerData = {
    text: 'Home',
    left: {
      icon: 'arrow-back',
      handler: () => {
        this.router.navigate(['our-menus'], {
          queryParams: {
            data: this.data
          }
        });
      }
    },
    color: 'dark',
    bgColor: 'light'
  };
  menu = [
    {
      title: 'Salad',
      subTitle: 'Green Salad',
      price: '$6.0',
      imgSrc: 'meal.png'
    },
    {
      title: 'Chicken',
      subTitle: 'Chicken Fry',
      price: '$20.0',
      imgSrc: '6.jpg'
    },
    {
      title: 'Pizza',
      subTitle: 'Veg Pizza',
      price: '$8.0',
      imgSrc: '10.jpg'
    },
    {
      title: 'Burger',
      subTitle: 'Nonveg Burger',
      price: '$18.0',
      imgSrc: '7.jpg'
    },
    {
      title: 'Fish',
      subTitle: '---',
      price: '$6.0',
      imgSrc: 'fish.png'
    },
    {
      title: 'Brownies',
      subTitle: 'Freshly Baked',
      price: '$20.0',
      imgSrc: '15.jpg'
    },
    {
      title: 'Rolls',
      subTitle: 'Chicken Rolls',
      price: '$8.0',
      imgSrc: '3.jpg'
    },
    {
      title: 'Appetizers',
      subTitle: 'Mixed ',
      price: '$18.0',
      imgSrc: '9.jpg'
    }
  ];
  data: any = null;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      try {
        this.data = params.get('data');
      } catch (error) {
        console.error(error);
      }
    })
  }

  getDisplayData(item: any): any {
    return {
      title: item.title,
      subTitle: item.subTitle,
      imgSrc: item.imgSrc
    }
  }

}
