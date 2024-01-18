import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBComponent } from './page-b.component';

describe('PageBComponent', () => {
  let component: PageBComponent;
  let fixture: ComponentFixture<PageBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
