import { Injectable } from '@angular/core';
import { distanceBetweenColors, randomColor } from './helpers';
import { Color } from '../models/color.model';
import { ColorComponent } from '../models/color-component.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private compColor = randomColor();
  private userColor: Color = {r:0, g:0, b:0};

  private compColor$ = new BehaviorSubject(this.compColor);
  private userColor$ = new BehaviorSubject(this.userColor);
  private distance$ = new BehaviorSubject(distanceBetweenColors(this.compColor, this.userColor));

  inc(component: ColorComponent) {
    this.userColor = {
      ...this.userColor, 
      [component]: Math.min(this.userColor[component] + 1, 255)
    }

    this.userColor$.next(this.userColor);
    this.distance$.next(distanceBetweenColors(this.userColor, this.compColor));
  }

  dec(component: ColorComponent) {
    this.userColor = {
      ...this.userColor, 
      [component]: Math.max(this.userColor[component] - 1, 0)
    }

    this.userColor$.next(this.userColor);
    this.distance$.next(distanceBetweenColors(this.userColor, this.compColor));
  }
  

  constructor() { }

  getUserColor(): Observable<Color> {
    return this.userColor$.asObservable();
  }

  getComputerColor(): Observable<Color> {
    return this.compColor$.asObservable();
  }

  getDistance(): Observable<number> {
    return this.distance$.asObservable();
  }
}
