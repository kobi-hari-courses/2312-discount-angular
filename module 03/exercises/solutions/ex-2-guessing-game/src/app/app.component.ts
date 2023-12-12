import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameState } from './models/game-state.model';
import { Guess } from './models/guess.model';
import { GuessState } from './models/guess-state.model';
import { calcGuessState } from './helpers/game.helpers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  secret: number = 0;
  gameState: GameState = 'Init';
  guesses: Guess[] = [];

  startGame() {
    this.secret = Math.ceil(Math.random() * 100);
    this.gameState = 'In Progress';
    this.guesses = [];
  }

  submitGuess(value: number) {
    if (this.gameState !== 'In Progress') return;
    const newGuess: Guess = {
      value: value,
      state: calcGuessState(value, this.secret),
    };

    this.guesses.push(newGuess);
    if (newGuess.state === 'Exact') {
      this.gameState = 'Win';
    } else if (this.guesses.length >= 10) {
      this.gameState = 'Lose';
    }
  }
}
