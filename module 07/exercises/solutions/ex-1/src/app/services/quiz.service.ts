import { Injectable } from '@angular/core';
import { randomNumber } from './helpers';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private num1: number = randomNumber(5, 20);
  private num2: number = randomNumber(5, 20);

  private questionsCount: number = 0;
  private correctCount: number = 0;
  private score: number = 0;

  private num1$ = new BehaviorSubject(this.num1);
  private num2$ = new BehaviorSubject(this.num2);
  private questionsCount$ = new BehaviorSubject(this.questionsCount);
  private correctCount$ = new BehaviorSubject(this.correctCount);
  private score$ = new BehaviorSubject(this.score);

  constructor() { }

  submit(value: number) {
    const isCorrect = (value === this.num1 * this.num2);
    if (isCorrect) this.correctCount++;
    this.questionsCount++;
    this.score = this.correctCount / this.questionsCount;
    this.num1 = randomNumber(5, 20);
    this.num2 = randomNumber(5, 20);

    this.correctCount$.next(this.correctCount);
    this.questionsCount$.next(this.questionsCount);
    this.score$.next(this.score);
    this.num1$.next(this.num1);
    this.num2$.next(this.num2);
  }

  getNum1() { return this.num1$.asObservable()}
  getNum2() { return this.num2$.asObservable()}
  getQuestionsCount() { return this.questionsCount$.asObservable()}
  getCorrectCount() { return this.correctCount$.asObservable()}
  getScore() { return this.score$.asObservable()}

}
