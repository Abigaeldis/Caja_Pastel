import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { BaseEntity } from '../entities/base-entity';
@Injectable({
  providedIn: 'root',
})
export abstract class GenericAsyncCRUDService<T extends BaseEntity> {
  protected abstract _URL: string;
  constructor(private httpClient: HttpClient) {}

  public get URL(): string | undefined {
    return this._URL;
  }

  public set URL(url: string) {
    this._URL = url;
  }

  public getAllItems(): Observable<T[]> {
    return this.httpClient.get<T[]>(this._URL).pipe(
      map((items: T[] | null) => {
        if (items == null) {
          return [];
        }
        return items;
      }),
      catchError((e) => {
        console.error(e);
        return of([]);
      })
    );
  }

  public getItemById(id: number): Observable<T> {
    return this.httpClient.get<T>(this._URL + '/' + id).pipe(
      map((item: T) => {
        return item;
      }),
      catchError((e) => {
        console.error(e);
        return of();
      })
    );
  }

  public postItem(item: T): Observable<T> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('passage dans le post');
    return this.httpClient
      .post<T>(this._URL, item, {
        headers,
      })
      .pipe(
        catchError((error: any) => {
          console.error(error);
          throw error;
        })
      );
  }

  public putItem(item: T, id: number): Observable<T> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('passage dans le put');
    console.log(item.id);
    console.log(item);

    return this.httpClient
      .put<T>(this._URL + '/' + id, item, {
        headers,
      })
      .pipe(
        catchError((error: any) => {
          console.error(error);
          throw error;
        })
      );
  }

  public deleteItem(id: number): Observable<any> {
    return this.httpClient.delete(`${this._URL}/${id}`).pipe(
      catchError((error: any) => {
        console.error(error);
        return of(undefined);
      })
    );
  }
}
