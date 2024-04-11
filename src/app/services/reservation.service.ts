import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericAsyncCRUDService } from './generic-async-crud.service';
import { Reservation } from '../entities/reservation';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService extends GenericAsyncCRUDService<Reservation> {
  protected override _URL: string = 'http://localhost:8080/reservations';
  public nbResaEnAttente!: number;

  constructor(httpClient: HttpClient, private http: HttpClient) {
    super(httpClient);
  }

  getReservationsByDate(date: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this._URL}/par-date`, {
      params: { date: date },
    });
  }

  confirmReservation(
    id: number,
    status: string = 'Confirmée'
  ): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this._URL}/${id}`, { statut: status }, { headers });
  }
}
