import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cusine-card',
  templateUrl: './cusine-card.component.html',
  styleUrls: ['./cusine-card.component.scss'],
})
export class CusineCardComponent  implements OnInit {
  @Input() classes = '';
  @Input() showButton = true;
  constructor() { }

  ngOnInit() {}

}
