import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCell } from 'src/app/models/card-cell.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  @Input({required: true})
  card!: CardCell;

  @Input()
  flipped = false;

  @Output()
  flip = new EventEmitter<void>();

  imagePath = '';
  backPath = 'assets/images/bg.jpg';

  calcPath(): string {
    if (this.card === null) return '';
    return `assets/images/cards/${this.card.image}.jpg`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.imagePath = this.calcPath();
  }

}
