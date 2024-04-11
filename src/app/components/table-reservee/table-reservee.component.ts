import { Component } from '@angular/core';
import { Table } from '../../entities/table';
import { TableService } from '../../services/table.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table-reservee',
  standalone: true,
  imports: [],
  templateUrl: './table-reservee.component.html',
  styleUrl: './table-reservee.component.scss',
})
export class TableReserveeComponent {
  public table!: Table;

  constructor(
    private tableService: TableService,
    private activeModal: NgbActiveModal
  ) {
    this.table = tableService.currentTable || new Table();
  }

  public onClose(): void {
    this.activeModal.close();
  }

  public confirmerPresence(): void {
    this.table.etat = 'Présent';
    this.tableService.putItem(this.table, this.table.id ?? 0).subscribe();
  }
}
