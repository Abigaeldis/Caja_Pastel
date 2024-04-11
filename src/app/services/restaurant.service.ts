import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../entities/restaurant';
import { GenericAsyncCRUDService } from './generic-async-crud.service';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService extends GenericAsyncCRUDService<Restaurant> {
  protected override _URL: string = 'http://localhost:8080/restaurants';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
