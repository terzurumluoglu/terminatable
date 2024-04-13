import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenComponent } from './frozen.component';

describe('FrozenComponent', () => {
  let component: FrozenComponent;
  let fixture: ComponentFixture<FrozenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrozenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrozenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
