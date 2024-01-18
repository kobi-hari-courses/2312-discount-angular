import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCComponent } from './page-c.component';

describe('PageCComponent', () => {
  let component: PageCComponent;
  let fixture: ComponentFixture<PageCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
