import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { Subscription, count } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-reader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-reader.component.html',
  styleUrl: './counter-reader.component.css', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent {
  value$ = inject(CounterService).getValue();

  // value: number = -1;

  // sub = inject(CounterService).getValue().subscribe(val => {
  //   console.log('Counter changed to ', val);
  //   this.value = val;
  // });

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }


}
