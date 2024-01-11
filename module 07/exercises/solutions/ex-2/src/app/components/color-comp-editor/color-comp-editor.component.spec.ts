import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCompEditorComponent } from './color-comp-editor.component';

describe('ColorCompEditorComponent', () => {
  let component: ColorCompEditorComponent;
  let fixture: ComponentFixture<ColorCompEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorCompEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorCompEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
