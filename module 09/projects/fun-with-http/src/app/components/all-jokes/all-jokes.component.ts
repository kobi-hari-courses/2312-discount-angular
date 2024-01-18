import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-jokes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-jokes.component.html',
  styleUrl: './all-jokes.component.css'
})
export class AllJokesComponent {
  data = inject(DataService);
  jokes$ = this.data.allJokes();

}
