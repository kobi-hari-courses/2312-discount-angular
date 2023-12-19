import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { StringSelectorComponent } from "./components/string-selector/string-selector.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, TitleComponent, StringSelectorComponent]
})
export class AppComponent {
  colors: string[] = ['red', 'green', 'blue', 'brown', 'black', 'purple'];
  fonts: string[] = ['Arial', 'David', 'Times new roman', 'Verdana', 'Consolas', 'Segoe UI'];
  sizes: string[] = ['16px', '18px', '24px', '30px', '42px', '70px'];

  selectedColor: string = this.colors[0];
  selectedFont: string = this.fonts[0];
  selectedSize: string = this.sizes[0];


  selectColor(value: string) {
    this.selectedColor = value;
  }
  selectFont(value: string) {
    this.selectedFont = value;
  }
  selectSize(value: string) {
    this.selectedSize = value;
  }

  onSpecialTitleEvent(times: number) {
    if (times === 3) {
      this.selectedColor = 'purple';
    } else {
      this.selectedColor = 'blue';
    }
  }
}
