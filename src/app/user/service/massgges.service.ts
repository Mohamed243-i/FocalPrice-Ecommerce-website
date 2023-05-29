import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MassggesService {
  constructor(private _httpClient: HttpClient) {}
  showMassages(): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };

    return this._httpClient.get<any>(
      'http://localhost:8000/api/showResponse',
      httpOptions
    );
  }

  markAllSeenMessages(): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this._httpClient.post<any>(
      'http://localhost:8000/api/ShownByUser',
      {},
      httpOptions
    );
  }
}
