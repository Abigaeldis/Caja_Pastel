import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const urlWithParams = `${this.baseUrl}?mail=${encodeURIComponent(
      email
    )}&motDePasse=${encodeURIComponent(password)}`;

    return this.http.post<any>(urlWithParams, null).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  isAuthenticated(): boolean {
    console.log('isAuthenticated method');
    const token = localStorage.getItem('token');
    // return true si il y a un token
    return !!token;
  }
}
