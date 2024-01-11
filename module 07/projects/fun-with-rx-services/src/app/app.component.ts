import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterReaderComponent } from './components/counter-reader/counter-reader.component';
import { CounterWriterComponent } from './components/counter-writer/counter-writer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterReaderComponent, CounterWriterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showReader = true;

  toggleReader() {
    this.showReader = !this.showReader;
  }
}
