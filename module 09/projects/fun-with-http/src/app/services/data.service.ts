import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly http = inject(HttpClient);
  readonly urlBase = 'http://localhost:3000';

  private readonly getAll$ = this.http.get<Joke[]>(`${this.urlBase}/jokes`);

  private readonly getAll2$ = this.http.get<Joke[]>(`${this.urlBase}/jokes`, {observe: 'events'});


  constructor() {
  }

  allJokes() {
    return this.getAll$;
  }

  allJokes2() {
    return this.getAll2$;
  }
}
