import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReserveeComponent } from './table-reservee.component';

describe('TableReserveeComponent', () => {
  let component: TableReserveeComponent;
  let fixture: ComponentFixture<TableReserveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableReserveeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableReserveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
