import { Component, Input, OnInit } from '@angular/core';
import {
  NgbActiveModal,
  NgbDateStruct,
  NgbModalModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from '../../entities/reservation';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Table } from '../../entities/table';
import { TableService } from '../../services/table.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validation-reservation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './validation-reservation.component.html',
  styleUrl: './validation-reservation.component.scss',
})
export class ValidationReservationComponent implements OnInit {
  public tables$!: Observable<Table[]>;
  public table?: Table;
  @Input() reservation!: Reservation;
  constructor(
    private modal: NgbActiveModal,
    private tableService: TableService
  ) {}

  ngOnInit(): void {
    console.log(this.reservation);
    console.log(this.reservation.date ?? '');
    console.log(this.reservation.date ?? ''.toString());
    if (this.reservation.date && this.reservation.nbPersonne) {
      this.tables$ = this.tableService.getTableEligiblesReservation(
        this.reservation.date?.toString(),
        this.reservation.nbPersonne
      );
    }
  }

  dismiss() {
    this.modal.dismiss();
  }

  confirm() {
    this.modal.close({ reservation: this.reservation, table: this.table });
  }
}
