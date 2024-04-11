import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../entities/commande';
import { GenericAsyncCRUDService } from './generic-async-crud.service';
import { Table } from '../entities/table';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommandeService extends GenericAsyncCRUDService<Commande> {
  protected override _URL: string = 'http://localhost:8080/commandes';

  public currentTable?: Table;
  public currentListeNbPlat?: { [key: number]: number } = {};

  private _currentCommande?: Commande;

  public get currentCommande(): Commande | undefined {
    return this._currentCommande;
  }
  public set currentCommande(value: Commande) {
    this._currentCommande = value;
  }

  constructor(httpClient: HttpClient, private http: HttpClient) {
    super(httpClient);
  }

  getAdditionByCommande(id: number): Observable<Commande> {
    return this.http.get<Commande>(`${this._URL}/addition/` + id);
  }
}
