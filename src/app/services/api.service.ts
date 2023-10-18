import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doc, Noticias } from '../interfaces/Noticias';
import { Clubes } from '../interfaces/Clubes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL  = 'http://localhost:3000/api/'
  private headers;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
   }

    getNoticias(): Observable<Noticias> {
    return this.http.get<Noticias>(this.API_URL + 'noticias',);
   };
    getClubes(): Observable<Clubes> {
    return this.http.get<Clubes>(this.API_URL + 'clubes',);
  };
}
