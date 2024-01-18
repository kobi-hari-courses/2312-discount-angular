import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { ALL_MOVIES } from '../models/all-movies';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCount(): Observable<number> {
    return of(ALL_MOVIES.length);
  }

  getAllTitles(): Observable<string[]> {
    const titles = ALL_MOVIES.map(m => m.caption);
    return of(titles).pipe(
      delay(200)
    );
  }

  getMovieByIndex(index: number): Observable<Movie> {
    const movie = ALL_MOVIES[index];
    return of(movie).pipe(
      delay(2000)
    );
  }

  getMovieByTitle(title: string) {
    const movie = ALL_MOVIES.find(m => m.caption === title);
    return of(movie).pipe(
      delay(2000)
    );
  }


}
