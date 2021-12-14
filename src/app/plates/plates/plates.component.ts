import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

interface Cell {
  x: number;
  y: number;
  piece: number;
}

@Component({
  selector: 'app-plates',
  templateUrl: './plates.component.html',
  styleUrls: ['./plates.component.css'],
})
export class PlatesComponent implements OnInit {
  constructor() {}

  private myData = [
    { Framework: 'Vue', Stars: '166443', Released: '2014' },
    { Framework: 'React', Stars: '150793', Released: '2013' },
    { Framework: 'Angular', Stars: '62342', Released: '2016' },
    { Framework: 'Backbone', Stars: '27647', Released: '2010' },
    { Framework: 'Ember', Stars: '21471', Released: '2011' },
  ];
  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;

  marginTop = 30;
  marginLeft = 30;
  fieldSize = 40;
  boardDimension = 8;
  boardSize = this.boardDimension * this.fieldSize;

  board: Cell[] = [];

  ngOnInit(): void {
    for (var i = 0; i < this.boardDimension * this.boardDimension; i++) {
      this.board.push({
        x: i % this.boardDimension,
        y: Math.floor(i / this.boardDimension),
        piece: 0,
      });
    }

    const div = d3
      .select('figure#bar')
      .append('div')
      .style('position', 'fixed')
      .style('top', this.marginTop + 'px')
      .style('left', this.marginLeft + 'px')
      .style('width', this.boardSize + 'px')
      .style('height', this.boardSize + 'px');

    var svg = div
      .append('svg')
      .attr('width', this.boardSize + 'px')
      .attr('height', this.boardSize + 'px')
      .selectAll('.fields')
      .data(this.board)
      .enter()
      .append('g');

    svg
      .append('rect')
      .style('class', 'fields')
      .style('class', 'rects')
      .attr('x', function (d) {
        return d.x * 40;
      })
      .attr('y', function (d) {
        return d.y * 40;
      })
      .attr('width', 40 + 'px')
      .attr('height', 40 + 'px')
      .style('fill', function (d) {
        if ((d.x % 2 == 0 && d.y % 2 == 0) || (d.x % 2 == 1 && d.y % 2 == 1))
          return 'beige';
        else return 'tan';
      });

    svg
      .append('text')
      .style('font-size', '40')
      .attr('text-anchor', 'middle')
      .attr('dy', '35px')
      .attr('dx', '20px')
      .text('\u2655');
  }

  // private createSvg(): void {
  //   this.svg = d3
  //     .select('figure#bar')
  //     .selectAll('p')
  //     .data(this.myData)
  //     .enter()
  //     .append('p')
  //     .text((data) => data.Framework);
  // }
}
