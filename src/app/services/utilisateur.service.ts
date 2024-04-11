import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericAsyncCRUDService } from './generic-async-crud.service';
import { Utilisateur } from '../entities/utilisateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService extends GenericAsyncCRUDService<Utilisateur> {
  protected override _URL: string = 'http://localhost:8080/utilisateurs';

  constructor(httpClient: HttpClient, private http: HttpClient) {
    super(httpClient);
  }

  getUserByToken(token: string): Observable<any> {
    return this.http.get(`${this._URL}/token/${token}`);
  }
}
