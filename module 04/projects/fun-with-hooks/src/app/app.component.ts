import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CircleComponent } from './components/circle/circle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CircleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  colors: [number, number, number][] = [
    [255, 0, 0], 
    [0, 255, 0], 
    [0, 0, 255], 
    [255, 255, 0]
  ]

  addCircle(r: number, g: number, b: number) {
    this.colors.push([r, g, b]);
  }

  changeCircle(r: number, g: number, b: number) {
    this.colors[0][0] = r;
    this.colors[0][1] = g;
    this.colors[0][2] = b;
  }

  deleteLast() {
    this.colors.splice(this.colors.length-1);
  }
}
