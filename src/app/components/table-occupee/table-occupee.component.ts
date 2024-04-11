import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Table } from '../../entities/table';
import { TableService } from '../../services/table.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-occupee',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './table-occupee.component.html',
  styleUrl: './table-occupee.component.scss',
})
export class TableOccupeeComponent {
  public table!: Table;

  constructor(
    private tableService: TableService,
    private activeModal: NgbActiveModal,
    private router: Router
  ) {
    this.table = tableService.currentTable || new Table();
  }

  public onClose(): void {
    this.activeModal.close();
  }

  public priseCommande(): void {
    this.router.navigateByUrl('/prendre-commande');
    this.activeModal.close();
  }
}
