import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentQuestionComponent } from './current-question.component';

describe('CurrentQuestionComponent', () => {
  let component: CurrentQuestionComponent;
  let fixture: ComponentFixture<CurrentQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
