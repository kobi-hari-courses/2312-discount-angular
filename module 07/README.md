## Module 07 - Reactive Services, 
### Projects:
|     |     |
| --- | --- |
| [fun-with-rx-services](./projects/fun-with-rx-services/) | Introduction to reactive development in angular |

### RxJS in Angular Services
* We learned how to develop stateful services using `BehaviorSubject` and expose it as an observable using the `.asObservable()` method
* We understood that if we subscribe to an observable we must also unsubscribe from it when we are done with it to avoid memory leaks
* We saw that we can bind directly to an observable using the `async pipe` in the html
* We learned the term **Fully Reactive Application** as one where we pass observables all the way from the services to the html templates
* We saw how to configure manual change detection for components and understood that it can dramatically improve performance
* We saw how to inject the `ChangeDetectorRef` and to manually activate `detectChanges` to force invalidation of the DOM

### Introduction to `RxJS` operators
* We talked about the concept of operators in math, strings and arrays
* We understood that RxJS operators create observables. 
* We saw 4 documentation web sites that serve as reference guide for reactive operators
    * [ReactiveX docs](http://reactivex.io/)
    * [RxJS docs](https://rxjs-dev.firebaseapp.com/)
    * [Rx Marbles](https://rxmarbles.com/)
    * [Rx Marble Visualizer](https://rxviz.com/)
* We covered some simple operators
    * [map](https://rxjs-dev.firebaseapp.com/api/operators/map)
    * [from](https://rxjs-dev.firebaseapp.com/api/index/function/from)
    * [filter](https://rxjs-dev.firebaseapp.com/api/operators/filter)
    * [take](https://rxjs-dev.firebaseapp.com/api/operators/take)
* We created an example that uses observable to convert color search keyword into a list of matching results (colors)
* We used the `map` operator to convert user input to results

### Combinators
* We saw some combinators we can use to combine several observables together into one
    - `combineLatest`
