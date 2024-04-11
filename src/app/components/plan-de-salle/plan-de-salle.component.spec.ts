import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeSalleComponent } from './plan-de-salle.component';

describe('PlanDeSalleComponent', () => {
  let component: PlanDeSalleComponent;
  let fixture: ComponentFixture<PlanDeSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanDeSalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanDeSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
