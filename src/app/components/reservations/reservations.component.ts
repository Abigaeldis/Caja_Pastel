import { Component, Injectable } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbAlertModule,
  NgbDateStruct,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Reservation } from '../../entities/reservation';
import { ReservationService } from '../../services/reservation.service';
import { ConfirmationModalComponent } from '../confirmation-modale/confirmation-modale.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ValidationReservationComponent } from '../validation-reservation/validation-reservation.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [
    HeaderComponent,
    NgbDatepickerModule,
    NgbAlertModule,
    FormsModule,
    JsonPipe,
    CommonModule,
    NavbarComponent,
  ],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
})
export class ReservationsComponent {
  model: NgbDateStruct = { year: 2024, month: 4, day: 3 };
  reservationsByDate$!: Observable<Reservation[]>;

  constructor(
    private reservationService: ReservationService,
    private ngbModal: NgbModal
  ) {}

  ngOnInit(): void {
    const formattedInitialDate = this.formatDate(this.model);
    this.onDateChange(formattedInitialDate);
  }

  onDateChange(newDate: string): void {
    console.log('date changed');
    console.log(newDate);
    this.reservationsByDate$ =
      this.reservationService.getReservationsByDate(newDate);
  }

  onDateChangeInput(newDate: NgbDateStruct): void {
    const dateString = this.formatDate(newDate);
    console.log('date changed', dateString);
    this.reservationsByDate$ =
      this.reservationService.getReservationsByDate(dateString);
  }

  private formatDate(date: NgbDateStruct): string {
    const paddedMonth = date.month.toString().padStart(2, '0');
    const paddedDay = date.day.toString().padStart(2, '0');
    return `${date.year}-${paddedMonth}-${paddedDay}`;
  }

  incrementDate(days: number): void {
    const newDate = new Date(
      this.model.year,
      this.model.month - 1,
      this.model.day + days
    );
    this.model = {
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      day: newDate.getDate(),
    };
    const formattedDate = this.formatDate(this.model);
    console.log(formattedDate);
    this.onDateChange(formattedDate);
  }

  askValidationAndConfirm(reservation: Reservation): void {
    const modalRef = this.ngbModal.open(
      ValidationReservationComponent,
      this.modalOptions
    );
    modalRef.componentInstance.reservation = reservation;

    modalRef.result.then((result) => {
      console.log('Résa validée');
      result.reservation.table = result.table;
      console.log(result.reservation);
      this.confirmReservation(result.reservation);
    });
  }

  confirmReservation(reservation: Reservation): void {
    const reservationId: number | undefined = reservation.id;
    if (reservationId === undefined) {
      console.error('Error: Reservation ID is undefined.');
      return;
    }
    reservation.statut = 'Confirmée';
    console.log(reservation);
    this.reservationService.putItem(reservation, reservationId).subscribe({
      next: () => {
        console.log('Reservation confirmée');
        this.refreshReservations();
      },
      error: (error) => console.error('Error confirming reservation:', error),
    });
  }

  public modalOptions = {
    centered: true,
  };

  askConfirmationAndDelete(id: number): void {
    const modalRef = this.ngbModal.open(
      ConfirmationModalComponent,
      this.modalOptions
    );
    modalRef.componentInstance.id = id;

    modalRef.result.then(
      (result) => {
        if (result) {
          this.deleteReservation(result);
        }
      },
      (reason) => {
        console.log('Dismissed', reason);
      }
    );
  }

  deleteReservation(id: number | undefined): void {
    if (id === undefined) {
      console.error(
        'Error: Attempted to delete a reservation without a valid ID.'
      );
      return;
    }

    this.reservationService.deleteItem(id).subscribe({
      next: () => {
        console.log('Reservation deleted successfully');
        this.refreshReservations(); // Assuming you implement this to refresh the reservation list.
      },
      error: (error) => {
        console.error('Error deleting reservation:', error);
      },
    });
  }

  refreshReservations(): void {
    const formattedDate = this.formatDate(this.model);
    this.onDateChangeInput(this.model);
  }
}
