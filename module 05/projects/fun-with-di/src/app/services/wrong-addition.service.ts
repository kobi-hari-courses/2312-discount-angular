import { Injectable } from '@angular/core';
import { HistoryService } from './history.service';
import { AddingService } from './adding-service.interface';

@Injectable({
  providedIn: 'root'
})
export class WrongAdditionService implements AddingService {
  public id = Math.ceil(Math.random() * 10000000);

  constructor(private historyService: HistoryService) {
      console.log('Wrong Addition Service Constructed with id', this.id);        
  }

  add(a: number,  b: number) {
      this.historyService.audit(`service ${this.id}, wrong addition of ${a} and ${b}`);

      return a + b + 1;
  }}
