import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Color } from '../../models/color.model';

@Component({
  selector: 'app-color-square',
  standalone: true,
  imports: [],
  templateUrl: './color-square.component.html',
  styleUrl: './color-square.component.css'
})
export class ColorSquareComponent implements OnChanges {
  @Input({required: true})
  color!: Color;

  cssColor: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.cssColor = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
  }
}
