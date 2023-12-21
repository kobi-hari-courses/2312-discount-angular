import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCell } from 'src/app/models/card-cell.model';
import { Card } from 'src/app/models/card.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-board',
  standalone: true,
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  imports: [CommonModule, CardComponent],
})
export class BoardComponent {
  @Input({ required: true })
  cells!: CardCell[];

  @Output()
  miss = new EventEmitter<void>();

  @Output()
  match = new EventEmitter<Card[]>();

  flipped: string[] = [];

  get isFrozen() { return this.flipped.length === 2};
  isFlipped(card: CardCell) {
    if (card === null) return false;
    return this.flipped.includes(card.id);
  }

  findCard(id: string): Card | null {
    const res = this.cells.find((c) => c !== null && c.id === id);
    return res ?? null;
  }

  
  onFlip(card: CardCell) {
    if (this.isFrozen) {
      this.onUnfreeze();
    } else {
      if (card === null) return;
      if (this.isFlipped(card)) return;

      this.flipped = [...this.flipped, card.id];
    }
  }


  onUnfreeze() {
    const card1 = this.findCard(this.flipped[0])!;
    const card2 = this.findCard(this.flipped[1])!;

    if (card1.image === card2.image) {
      this.match.emit([card1, card2]);
    } else {
      this.miss.emit();
    }

    this.flipped = [];
  }

}
