import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'plate-cell',
  templateUrl: './plate-cell.component.html',
  styleUrls: ['./plate-cell.component.css'],
})
export class PlateCellComponent implements OnInit {
  @Input() type: string = 'H';
  @Input() text: string = 'N';
  @Input() color: string = 'black';

  constructor() {}

  ngOnInit(): void {}
}
