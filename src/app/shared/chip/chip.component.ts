import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input() color = 'light';
  @Input() text = 'Chip';
  @Input() size = 'normal';
  @Input() type = 'normal';
  @Input() shape = 'round';
  constructor() { }

  ngOnInit() {}

}
