import { Injectable } from '@angular/core';
import { PlatCommande } from '../entities/platcommande';
import { HttpClient } from '@angular/common/http';
import { GenericAsyncCRUDService } from './generic-async-crud.service';

@Injectable({
  providedIn: 'root',
})
export class PlatCommandeService extends GenericAsyncCRUDService<PlatCommande> {
  protected override _URL: string = 'http://localhost:8080/plat-commandes';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
