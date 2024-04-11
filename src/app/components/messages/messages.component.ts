import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable, map } from 'rxjs';
import { Message } from '../../entities/message';
import { MessageService } from '../../services/message.service';
import { HeaderComponent } from '../header/header.component';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../entities/reservation';
import { ConfirmationModalComponent } from '../confirmation-modale/confirmation-modale.component';
import { ValidationReservationComponent } from '../validation-reservation/validation-reservation.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavbarComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent {
  public messages$!: Observable<Message[]>;
  public message$!: Observable<Message>;
  public reservations$!: Observable<Reservation[]>;

  constructor(
    private messageService: MessageService,
    private reservationService: ReservationService,
    private ngbModal: NgbModal
  ) {
    this.refreshMessages();
    this.refreshReservations();
  }

  public refreshMessages(): void {
    this.messages$ = this.messageService.getAllItems();
  }

  public refreshReservations(): void {
    this.reservations$ = this.reservationService
      .getAllItems()
      .pipe(
        map((reservations: Reservation[]) =>
          reservations.filter(
            (reservation) => reservation.statut == 'En attente'
          )
        )
      );
  }

  public modalOptions = {
    centered: true,
  };

  public selectMessage(message: Message): void {
    this.messageService.currentMessage = message;
    this.ngbModal.open(MessageModalComponent, this.modalOptions);
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
}
