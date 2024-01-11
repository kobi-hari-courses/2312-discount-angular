import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { ColorComponent } from '../../models/color-component.model';
import { GameService } from '../../services/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-color-comp-editor',
  standalone: true,
  imports: [],
  templateUrl: './color-comp-editor.component.html',
  styleUrl: './color-comp-editor.component.css'
})
export class ColorCompEditorComponent {
  @Input({required: true})
  component!: ColorComponent;

  gameService = inject(GameService);

  inc() {
    this.gameService.inc(this.component);
  }

  dec() {
    this.gameService.dec(this.component);
  }


}
