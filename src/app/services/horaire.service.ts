import { Injectable } from '@angular/core';
import { Horaire } from '../entities/horaire';
import { HttpClient } from '@angular/common/http';
import { GenericAsyncCRUDService } from './generic-async-crud.service';

@Injectable({
  providedIn: 'root',
})
export class HoraireService extends GenericAsyncCRUDService<Horaire> {
  protected override _URL: string = 'http://localhost:8080/horaires';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
