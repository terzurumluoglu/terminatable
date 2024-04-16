import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCustomizeComponent } from './color-customize.component';

describe('ColorCustomizeComponent', () => {
  let component: ColorCustomizeComponent;
  let fixture: ComponentFixture<ColorCustomizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorCustomizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
