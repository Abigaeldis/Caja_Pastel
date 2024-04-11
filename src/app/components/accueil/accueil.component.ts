import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { Reservation } from '../../entities/reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterModule, HeaderComponent, NavbarComponent, CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  public reservations$!: Observable<Reservation[]>;

  constructor(private reservationService: ReservationService) {
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
}
