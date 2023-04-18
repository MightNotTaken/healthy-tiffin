import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {
  headerData = {
    text: 'Lunch Meal',
    left: {
      icon: 'arrow-back',
      handler: () => {
        this.router.navigate(['our-menus']);
      }
    },
    color: 'dark',
    bgColor: 'light'
  };
  nutrients = [
    {
      amount: 234,
      unit: 'kcal',
      nutrient: 'Calories'
    },
    {
      amount: 34,
      unit: 'gr',
      nutrient: 'Protein'
    },
    {
      amount: 56,
      unit: 'gr',
      nutrient: 'Carbs'
    },
    {
      amount: 12,
      unit: 'gr',
      nutrient: 'Fat'
    }
  ];
  additionalCusine: any = {
    title: 'Pasta With Vegetables',
    price: '$27.0',
    imgSrc: '4.jpg'
  };
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
