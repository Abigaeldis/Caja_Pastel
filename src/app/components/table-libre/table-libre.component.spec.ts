import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLibreComponent } from './table-libre.component';

describe('TableLibreComponent', () => {
  let component: TableLibreComponent;
  let fixture: ComponentFixture<TableLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableLibreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
