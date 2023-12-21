import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCell } from './models/card-cell.model';
import { Player } from './models/player.model';
import { generateSuffledCards, toMatrix } from './helpers/card-helpers';
import { Card } from './models/card.model';
import { PlayerComponent } from './components/player/player.component';
import { BoardComponent } from './components/board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, PlayerComponent, BoardComponent],
})
export class AppComponent {
  cells: CardCell[] = [];
  player1!: Player;
  player2!: Player;
  currentPlayer = this.player1;
  isCompleted = false;

  constructor() {
    this.newGame();
  }

  newGame() {
    this.cells = generateSuffledCards();
    this.player1 = {
      name: 'Player 1',
      collectedPairs: [],
    };
    this.player2 = {
      name: 'Player 2',
      collectedPairs: [],
    };
    this.currentPlayer = this.player1;
    this.isCompleted = false;

    console.table(toMatrix(this.cells.map(i => i?.image), 7));
  }

  togglePlayer() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  onMiss() {
    this.togglePlayer();
  }

  onMatch(cards: Card[]) {
    const cardsIds = cards.map((c) => c.id);
    this.cells = this.cells.map((c) =>
      c === null || cardsIds.includes(c.id) ? null : c
    );

    this.currentPlayer.collectedPairs.push(cards[0]);
    this.isCompleted = this.cells.every((c) => c === null);
    console.table(toMatrix(this.cells.map(i => i?.image), 7));
  }
}
