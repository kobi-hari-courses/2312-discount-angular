import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circle',
  standalone: true,
  imports: [],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.css'
})
export class CircleComponent implements OnInit, OnChanges, OnDestroy{
  @Input()
  red: number = 0;

  @Input()
  green: number = 0;

  @Input()
  blue: number = 0;

  get color() {
    console.log('Getter Executed');
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }


  constructor() {
    console.log('Circle constructed', this.color);
  }
  ngOnDestroy(): void {
    console.log('Circle Destroyed');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.color = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    // console.log('Circle Changed', this.color, changes);
  }
  ngOnInit(): void {
    // this.color = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    // console.log('Circle init', this.color);
  }

  log() {
    console.log('Circle values are: ', this.red, this.green, this.blue, this.color);
  }

  nothing() {}


}
