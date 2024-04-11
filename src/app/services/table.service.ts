import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Table } from '../entities/table';
import { GenericAsyncCRUDService } from './generic-async-crud.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService extends GenericAsyncCRUDService<Table> {
  protected override _URL: string = 'http://localhost:8080/tables';

  private _currentTable?: Table;

  public get currentTable(): Table | undefined {
    return this._currentTable;
  }
  public set currentTable(value: Table) {
    this._currentTable = value;
  }

  constructor(httpClient: HttpClient, private http: HttpClient) {
    super(httpClient);
  }

  public getTableEligiblesReservation(
    date: string,
    nbPersonnes: number
  ): Observable<Table[]> {
    return this.http.get<Table[]>(`${this._URL}/libres/1`, {
      params: { date: date, nbPersonnes: nbPersonnes },
    });
  }
}
