import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './string-selector.component.html',
  styleUrl: './string-selector.component.css'
})
export class StringSelectorComponent {
  @Input({required: true})
  options: string[] = [];

  @Input()
  selectedOption = '';

  @Output()
  selection = new EventEmitter<string>();

  onClick(value: string) {
    this.selectedOption = value;
    this.selection.emit(value);
  }

}
