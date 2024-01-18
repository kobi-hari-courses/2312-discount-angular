import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  dataService = inject(DataService);
  router = inject(Router);
  movieNames$ = this.dataService.getAllTitles();

  onSelectMovie(index: number) {
    this.router.navigate(['movies', index]);

  }
}
