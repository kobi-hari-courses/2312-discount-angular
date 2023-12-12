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
  title = 'hello-angular';

  counter = 0;

  inc() {
    this.counter++;
  }

  constructor() {
    setTimeout(() => {
      this.title = 'Look at me, I have changed'
    }, 5000);
  }
}
