import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriseCommandeComponent } from './prise-commande.component';

describe('PriseCommandeComponent', () => {
  let component: PriseCommandeComponent;
  let fixture: ComponentFixture<PriseCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriseCommandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriseCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
