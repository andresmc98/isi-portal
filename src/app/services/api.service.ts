import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia, Noticias } from '../interfaces/Noticias';
import { Clubes } from '../interfaces/Clubes';
import { environment } from 'src/environment/environment';
import { Club } from '../interfaces/Clubes';
import { Dev, Devs } from '../interfaces/Devs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  //private API_URL = environment.localUrl //local
  private  API_URL = environment.baseUrl; //server
  private headers: HttpHeaders;


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getClubes(): Observable<Clubes> {
    return this.http.get<Clubes>(this.API_URL + 'clubes');
  }

  getClubById(id: string): Observable<Club> {
    return this.http.get<Club>(this.API_URL + 'clubes/' + id);
  }

  getDevs(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'devs');
  }

  getMaestros(): Observable<Dev> {
    return this.http.get<Dev>(this.API_URL + 'maestros');
  }

  getMaestroById(id: string): Observable<any> {
    return this.http.get<any>(this.API_URL + 'maestros/' + id);
  }

  getMaterias(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'materias');
  }

  getMediaByID(id: string): Observable<any> {
    return this.http.get<any>(this.API_URL + 'media/' + id);
}

  getNoticias(): Observable<Noticias> {
    return this.http.get<Noticias>(this.API_URL + 'noticias');
  }

  getNoticiaById(id: string): Observable<Noticia> {
    return this.http.get<any>(this.API_URL + 'noticias/' + id);
  }

  getFAQs(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'Faqs');
  }
}
