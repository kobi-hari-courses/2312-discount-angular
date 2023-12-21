import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from 'src/app/models/player.model';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-player',
    standalone: true,
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],
    imports: [CommonModule, CardComponent]
})
export class PlayerComponent {
  @Input({required: true})
  player!: Player;

  @Input({required: true})
  isActive = false;

}
