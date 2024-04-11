import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carte } from '../entities/carte';
import { GenericAsyncCRUDService } from './generic-async-crud.service';

@Injectable({
  providedIn: 'root',
})
export class CarteService extends GenericAsyncCRUDService<Carte> {
  protected override _URL: string = 'http://localhost:8080/cartes';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
