import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterReaderComponent } from './counter-reader.component';

describe('CounterReaderComponent', () => {
  let component: CounterReaderComponent;
  let fixture: ComponentFixture<CounterReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterReaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
