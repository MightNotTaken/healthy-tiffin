import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() headerData: any = {
    text: 'Header',
    left: {
      icon: 'menu',
      handler: () => {
        console.log('left');
      }
    },
    color: 'light',
    right: {
      icon: 'ellipsis-vertical',
      handler: () => {
        console.log('right');
      }
    }
  }
  constructor() { }

  ngOnInit() {}

}
