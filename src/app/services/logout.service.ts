import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  private baseUrl = 'http://localhost:8080/logout';

  constructor(private http: HttpClient) {}

  logout(): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({ token: token });
      return this.http.get(this.baseUrl, { headers });
    }
    return new Observable((observer) => {
      observer.next(null);
      observer.complete();
    });
  }
}
