import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-venue-figures',
  templateUrl: './venue-figures.component.html',
  styleUrls: ['./venue-figures.component.scss'],
})
export class VenueFiguresComponent  implements OnInit {
  @Input() data = {
    distance: '1.6 km',
    type: 'Restaurant',
    priceRange: '$15-$150'
  };
  constructor() { }

  ngOnInit() {}

}
