import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWriterComponent } from './counter-writer.component';

describe('CounterWriterComponent', () => {
  let component: CounterWriterComponent;
  let fixture: ComponentFixture<CounterWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterWriterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
