import { Component, OnInit, inject } from '@angular/core';
import { Observable, map, switchAll } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.css'
})
export class MovieEditComponent implements OnInit {
  movie$!: Observable<Movie>;
  route = inject(ActivatedRoute);
  dataService = inject(DataService);

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
      map(prms => Number(prms['index'])), 
      map(index => this.dataService.getMovieByIndex(index)), 
      switchAll()
    );
  }




}
