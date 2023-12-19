import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
}
