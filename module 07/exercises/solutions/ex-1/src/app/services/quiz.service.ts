import { Injectable } from '@angular/core';
import { randomNumber } from './helpers';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

interface Record {
  num1 : number;
  num2: number;
  answer: number | null;

}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private history: Record[] = [{
    num1: randomNumber(5, 20), 
    num2: randomNumber(5, 20), 
    answer: null
  }]; 

  private history$ = new BehaviorSubject(this.history);

  readonly num1$ = this.history$.pipe(
    map(history => history[history.length -1].num1)
  );

  readonly num2$ = this.history$.pipe(
    map(history => history[history.length -1].num2)
  );
  readonly questionsCount$ = this.history$.pipe(
    map(history => history.length - 1)
  )
  readonly correctCount$ = this.history$.pipe(
    map(history => history
          .filter(rec => (rec.num1 * rec.num2) === rec.answer)
          .length)
  );
  readonly score$ = combineLatest(
    [this.correctCount$, this.questionsCount$],
    (correct, questions) => correct / questions);

  constructor() { }

  submit(value: number) {
    const newHistory: Record[] = [];
    for (let index = 0; index < this.history.length - 1; index++) {
      newHistory.push(this.history[index]);
    }

    const last = this.history[this.history.length -1];
    const modifiedLast: Record = {
      ...last, 
      answer: value
    }

    newHistory.push(modifiedLast);
    newHistory.push({
      num1: randomNumber(5, 20), 
      num2: randomNumber(5, 20), 
      answer: null
    });

    this.history = newHistory;
    this.history$.next(this.history);

  }

}
