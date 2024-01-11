import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable, Observer, ReplaySubject, Subject, interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  createObserver(id: string): Observer<number> {
    return {
      next: (val) => console.log(`observer ${id} next ${val}`),
      complete: () => console.log(`observer ${id} complete`),
      error: (err) => console.log(`observer ${id} error ${err}`),
    };
  }

  createOfObservable(): Observable<number> {
    return of(42);
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createTimerObservable(): Observable<number> {
    return timer(3000);
  }

  createCustomObservable(): Observable<number> {
    return new Observable<number>((observer) => {
      observer.next(42);
      setTimeout(() => observer.next(100), 1000);
      setTimeout(() => observer.next(200), 2000);
      setTimeout(() => observer.next(300), 3000);
      setTimeout(() => observer.next(400), 4000);
      setTimeout(() => observer.next(550), 7000);
      setTimeout(() => observer.error('Oy'), 10000);
      setTimeout(() => observer.next(-200), 12000);

      return () => {
        console.log('I am now aware, that somebody unsubscribed');
      };
    });
  }

  createCustomSubject(): Observable<number> {
    const subject = new Subject<number>();

    subject.next(42);
    setTimeout(() => subject.next(100), 1000);
    setTimeout(() => subject.next(200), 2000);
    setTimeout(() => subject.next(300), 3000);
    setTimeout(() => subject.next(400), 4000);
    setTimeout(() => subject.next(550), 7000);
    setTimeout(() => subject.error('Oy'), 10000);

    return subject;
  }

  createCustomBehaviorSubject(): Observable<number> {
    const subject = new BehaviorSubject<number>(42);

    setTimeout(() => subject.next(100), 1000);
    setTimeout(() => subject.next(200), 2000);
    setTimeout(() => subject.next(300), 3000);
    setTimeout(() => subject.next(400), 4000);
    setTimeout(() => subject.next(550), 7000);
    setTimeout(() => subject.error('Oy'), 10000);

    return subject;
  }

  createCustomReplaySubject(): Observable<number> {
    const subject = new ReplaySubject<number>(2);

    subject.next(42);
    setTimeout(() => subject.next(100), 1000);
    setTimeout(() => subject.next(200), 2000);
    setTimeout(() => subject.next(300), 3000);
    setTimeout(() => subject.next(400), 4000);
    setTimeout(() => subject.next(550), 7000);
    setTimeout(() => subject.error('Oy'), 10000);

    return subject;
  }


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');

    const observable = this.createCustomReplaySubject();

    const subA = observable.subscribe(observerA);

    setTimeout(() => {
      observable.subscribe(observerB);
    }, 2500);

    // setTimeout(() => {
    //   console.log('Unsubscribing A');
    //   subA.unsubscribe();
    // }, 5000);
  }
}
