import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-venue-main',
  templateUrl: './venue-main.page.html',
  styleUrls: ['./venue-main.page.scss'],
})
export class VenueMainPage implements OnInit, AfterViewInit {
  headerData = {
    text: '',
    color: 'white',
    bgColor: 'transparent',
    left: {
      icon: 'arrow-back',
      handler: () => {
        this.router.navigate(['home']);
      } 
    },
    right: {
      icon: 'menu',
      handler: () => {
        this.openTodaysMenu();
      }
    }
  }
  data: any = {
    imgSrc: 'home rest-1.png'
  }
  timings = [
    {
      active: true,
      time: '10:00'
    }, {
      active: false,
      time: '11:00'
    }, {
      active: false,
      time: '12:00'
    }, {
      active: false,
      time: '13:00'
    }, {
      active: false,
      time: '14:00'
    }, {
      active: false,
      time: '15:00'
    }
  ];
  cusines = [
    {
      title: 'Cutlets',
      subTitle: 'Chicken Cutlets',
      price: '$12.0',
      imgSrc: '2.jpg'  
    },
    {
      title: 'Green Salad',
      subTitle: '---',
      price: '$6.0',
      imgSrc: '14.jpg'  
    },
    {
      title: 'Fish Fry',
      subTitle: 'Served with Lemon',
      price: '$8.0',
      imgSrc: 'fish.png'  
    }
  ];
  @ViewChild('dp', {static: true}) dp?: ElementRef;
  @ViewChild('content', {static: true}) content?: ElementRef;
  @ViewChild('chips', {static: true}) chips?: ElementRef;
  
  modalHeight = 2000;
  constructor(
    private platform: Platform,
    private router: Router,
    private acivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.acivatedRoute.queryParamMap.subscribe((params: any) => {
      try {
        const data = JSON.parse(params.get('data'));
        this.data = data;
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    });
  }

  loadTiming(index: number) {
    let i = 0;
    for (let time of this.timings) {
      time.active = index === i;
      i++;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const h1 = this.dp?.nativeElement?.getBoundingClientRect()?.height;
      const h2 = this.content?.nativeElement?.getBoundingClientRect()?.height;
      const h3 = this.chips?.nativeElement?.getBoundingClientRect()?.height;
      this.modalHeight = - 20 + this.platform.height() - h1 - h2 - h3;
    }, 500);
  }

  openTodaysMenu() {
    this.router.navigate(['our-menus'], {
      queryParams: {
        data: JSON.stringify(this.data)
      }
    });
  }

}
