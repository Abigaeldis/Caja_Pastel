import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Table } from '../../entities/table';
import { TableService } from '../../services/table.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-libre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-libre.component.html',
  styleUrl: './table-libre.component.scss',
})
export class TableLibreComponent {
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
    this.activeModal.close();
  }

  public iterateNumbers(capacity: number): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < capacity; i++) {
      numbers.push(i);
    }
    return numbers;
  }
}
