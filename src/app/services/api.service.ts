import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from '../interfaces/Noticias';
import { Clubes } from '../interfaces/Clubes';
import { environment } from 'src/environment/environment';
import { Club } from '../interfaces/Clubes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private API_URL = environment.localUrl //local
  private  API_URL = environment.baseUrl; //server
  private headers;

  private idClubMap: {[id: string]: string} ={
    'csti': '65caca985c79717634d16194',
    'csi': '65caca5d5c79717634d1616b'
  }


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  obtenerIdClubDesdeNombre(clubNombre: string): string | null{
    const id = Object.keys(this.idClubMap).find(key => this.idClubMap[key] === clubNombre);
    return id || null;
  }

  getClubes(): Observable<Clubes> {
    return this.http.get<Clubes>(this.API_URL + 'clubes');
  }

  getClubById(id: string): Observable<Club> {
    return this.http.get<Club>(this.API_URL + 'clubes/' + this.idClubMap[id]);
  }

  getMaestros(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'maestros');
  }

  getMaestroById(id: string): Observable<any> {
    return this.http.get<any>(this.API_URL + 'maestros/' + id);
  }

  getMaterias(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'materias');
  }

  getNoticias(): Observable<Noticias> {
    return this.http.get<Noticias>(this.API_URL + 'noticias',);
  };

}



