import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GameService } from './services/game.service';
import { ColorSquareComponent } from './components/color-square/color-square.component';
import { ColorCompEditorComponent } from './components/color-comp-editor/color-comp-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ColorSquareComponent, ColorCompEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private gameService = inject(GameService);
  compColor$ = this.gameService.getComputerColor();
  userColor$ = this.gameService.getUserColor();
  distance$ = this.gameService.getDistance();
}
