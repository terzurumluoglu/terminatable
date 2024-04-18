import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminatableComponent } from './terminatable.component';

describe('TerminatableComponent', () => {
  let component: TerminatableComponent;
  let fixture: ComponentFixture<TerminatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerminatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
