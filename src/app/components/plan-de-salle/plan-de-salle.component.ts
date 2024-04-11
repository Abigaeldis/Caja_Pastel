import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Observable } from 'rxjs';
import { Table } from '../../entities/table';
import { CommonModule } from '@angular/common';
import { TableService } from '../../services/table.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableReserveeComponent } from '../table-reservee/table-reservee.component';
import { TableOccupeeComponent } from '../table-occupee/table-occupee.component';
import { TableLibreComponent } from '../table-libre/table-libre.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-plan-de-salle',
  standalone: true,
  imports: [HeaderComponent, CommonModule, NavbarComponent],
  templateUrl: './plan-de-salle.component.html',
  styleUrl: './plan-de-salle.component.scss',
})
export class PlanDeSalleComponent {
  public tables$!: Observable<Table[]>;

  constructor(private tableService: TableService, private ngbModal: NgbModal) {
    this.refresh();
  }

  public refresh(): void {
    this.tables$ = this.tableService.getAllItems();
    // A ADAPTER AVEC TABLES DU JOUR
  }

  public selectTable(table: Table): void {
    this.tableService.currentTable = table;
    if (table.etat == 'Réservée') {
      this.ngbModal.open(TableReserveeComponent, { centered: true });
    } else if (table.etat == 'Libre') {
      this.ngbModal.open(TableLibreComponent, { centered: true });
    } else {
      this.ngbModal.open(TableOccupeeComponent, { centered: true });
    }
  }
}
