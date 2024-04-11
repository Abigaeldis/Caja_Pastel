import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOccupeeComponent } from './table-occupee.component';

describe('TableOccupeeComponent', () => {
  let component: TableOccupeeComponent;
  let fixture: ComponentFixture<TableOccupeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOccupeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableOccupeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
