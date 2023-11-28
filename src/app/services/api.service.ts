import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICatFactDTO } from '../dashboard-page/models/catFact';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = {
    'content-type': 'application/json',
  };
  catFactUrl: string = 'https://catfact.ninja/fact';
  constructor(private http: HttpClient) {}

  getCatFact(): Observable<ICatFactDTO> {
    const url = this.catFactUrl;
    return this.http.get<ICatFactDTO>(url, { headers: this.headers });
  }
}
