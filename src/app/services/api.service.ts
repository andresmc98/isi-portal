import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from '../interfaces/Noticias';
import { Clubes } from '../interfaces/Clubes';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = environment.localUrl //local
  //private  API_URL = environment.baseUrl; //server
  private headers;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getClubes(): Observable<Clubes> {
    return this.http.get<Clubes>(this.API_URL + 'clubes');
  }

  getMaterias(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'materias');
  }

  getNoticias(): Observable<Noticias> {
    return this.http.get<Noticias>(this.API_URL + 'noticias',);
  };

}



