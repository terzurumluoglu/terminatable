import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RowSelectionComponent } from './row-selection.component';


describe('RowSelectionComponent', () => {
  let component: RowSelectionComponent;
  let fixture: ComponentFixture<RowSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
