import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { DataService } from '../../services/data.service';
import { Observable, map, switchAll } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  movie$!: Observable<Movie>;

  route = inject(ActivatedRoute);
  router = inject(Router);
  dataService = inject(DataService);

  ngOnInit(): void {
    // const index = Number(this.route.snapshot.params['index']);
    // const movie$ = this.dataService.getMovieByIndex(index);
    // movie$.subscribe((v) => (this.movie = v));

    this.movie$ = this.route.params.pipe(
      map(prms => Number(prms['index'])), 
      map(index => this.dataService.getMovieByIndex(index)), 
      switchAll()
    );
  }

  goNext() {
    const index = Number(this.route.snapshot.params['index']);
    this.router.navigate(['movies', index + 1]);
  }

  goPrev() {
    const index = Number(this.route.snapshot.params['index']);
    this.router.navigate(['movies', index - 1]);
  }

  goEdit() {
    const index = Number(this.route.snapshot.params['index']);
    this.router.navigate(['movies', index, 'edit']);
  }

}
