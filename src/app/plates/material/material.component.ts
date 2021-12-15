import { Component, OnInit } from '@angular/core';
export interface Cell {
  type: string;
  text: string;
  color: string;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})
export class MaterialComponent implements OnInit {
  constructor() {}
  a: Array<Cell> = [];
  rows = 5;
  cols = 10;

  rowsIndex = Array.from(Array(this.rows + 1).keys());
  colsIndex = Array.from(Array(this.cols + 1).keys());
  rowNames = 'alpha';
  colnames = 'numeric';
  rowsStartWith = 'A';
  colsStartWith = 1;
  rowLabels: string[] = [];
  colLabels: string[] = [];
  alpha = Array.from(Array(26)).map((e, i) => i + 65);
  alphabet = this.alpha.map((x) => String.fromCharCode(x));

  // initialize empty array
  // +1 to make room for header cells
  cells = Array.from(Array(this.rows + 1), () => new Array(this.cols + 1));

  ngOnInit(): void {
    this.drawPlate();
  }

  drawPlate() {
    console.log('rowsIndex', this.rowsIndex);
    console.log('colsIndex', this.colsIndex);
    console.log(this.alphabet);
    // 00 box
    const c: Cell = {
      type: 'H',
      text: '00',
      color: 'grey',
    };
    this.cells[0][0] = c;
    for (let i = 0; i < this.cols; i++) {
      const c: Cell = {
        type: 'H',
        text: this.convertNumToChars(i),
        color: 'grey',
      };
      this.cells[0][i + 1] = c; // this.convertNumToChars(i);
    }
    for (let row = 1; row < this.rows + 1; row++) {
      for (let col = 0; col < this.cols + 1; col++) {
        let c: Cell;
        if (col === 0) {
          c = {
            type: 'H',
            text: row.toString(),
            color: 'grey',
          };
        } else {
          c = {
            type: 'C',
            text: 'XX',
            color: 'yellow',
          };
        }
        this.cells[row][col] = c;
      }
    }
    console.log('cells', this.cells);
  }

  convertNumToChars(n: number) {
    const multiplier = Math.floor(n / this.alphabet.length);
    const mod = n % this.alphabet.length;
    let result = '';
    if (multiplier) {
      result += this.alphabet[multiplier - 1];
    }
    result += this.alphabet[mod];
    return result;
  }
}
