import { Injectable } from '@angular/core';
import { Plat } from '../entities/plat';
import { HttpClient } from '@angular/common/http';
import { GenericAsyncCRUDService } from './generic-async-crud.service';

@Injectable({
  providedIn: 'root',
})
export class PlatService extends GenericAsyncCRUDService<Plat> {
  protected override _URL: string = 'http://localhost:8080/plats';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
