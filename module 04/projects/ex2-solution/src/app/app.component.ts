import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GameState } from './models/game-state.model';
import { Guess } from './models/guess.model';
import { calcGuessState } from './helpers/game.helpers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  secret: number = 0;
  gameState: GameState = 'Init';
  guesses: Guess[] = [];

  startGame() {
    this.secret = Math.ceil(Math.random() * 100) + 1;
    this.gameState = 'In Progress';
    this.guesses = [];
  }

  submitGuess(value: number) {
    if (this.gameState !== 'In Progress') return;

    const newGuess: Guess = {
      value: value, 
      state: calcGuessState(value, this.secret)
    };

    this.guesses.push(newGuess);

    if (newGuess.state === 'Exact') {
      this.gameState = 'Win';
    } else if (this.guesses.length >= 7) {
      this.gameState = 'Lost'
    }
  }

}
