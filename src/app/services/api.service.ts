import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { Noticias } from '../interfaces/Noticias';
import { Doc, Clubes } from '../interfaces/Clubes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = 'http://localhost:3000/api/'
  private headers;
  private useStaticData = true;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getNoticias(): Observable<Noticias> {
    return this.http.get<Noticias>(this.API_URL + 'noticias',);
  };

  getClubes(): Observable<Clubes> {
    //Informacion estatica de los clubes
    const clubes: Doc[] = [
      {
        id: '1',
        nombre: 'CSI',
        logo: {
          id: '1',
          filename: 'csi.png',
          mimeType: 'image/png',
          filesize: 1024,
          width: 200,
          height: 200,
          sizes: {
            thumbnail: { width: 50, height: 50, mimeType: 'image/png', filesize: 100, filename: 'csi_thumbnail.png' },
            card: { width: 100, height: 100, mimeType: 'image/png', filesize: 200, filename: 'csi_card.png' },
            tablet: { width: 150, height: 150, mimeType: 'image/png', filesize: 300, filename: 'csi_tablet.png' },
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          url: 'assets/csi.png',
        },
        descripcion: [
          { children: [{ text: 'Innovación, Colaboración, Progreso' }] }
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        nombre: 'CSTI',
        logo: {
          id: '2',
          filename: 'csti.png',
          mimeType: 'image/png',
          filesize: 1200,
          width: 180,
          height: 180,
          sizes: {
            thumbnail: { width: 45, height: 45, mimeType: 'image/png', filesize: 90, filename: 'csti_thumbnail.png' },
            card: { width: 90, height: 90, mimeType: 'image/png', filesize: 180, filename: 'csti_card.png' },
            tablet: { width: 135, height: 135, mimeType: 'image/png', filesize: 270, filename: 'csti_tablet.png' },
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          url: 'assets/csti.png',
        },
        descripcion: [
          { children: [{ text: 'Descripción del club CSTI' }] }
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Simular la respuesta del servicio cuando se solicita la información de todos los clubes
    const response: Clubes = {
      docs: clubes,
      totalDocs: clubes.length,
      limit: 10, // ajusta según tus necesidades
      totalPages: 1,
      page: 1,
      pagingCounter: 1,
      hasPrevPage: false,
      hasNextPage: false,
      prevPage: null,
      nextPage: null,
    };

    return of(response);
  }

  // Método para obtener información de un club por nombre
  getClubByName(nombre: string): Observable<Doc | null> {
    if (this.useStaticData) {
      return this.getClubes().pipe(
        // Utilizamos map para transformar la respuesta del observable
        map((response: Clubes) => {
          const club = response.docs.find((c) => c.nombre === nombre);
          return club || null;
        }),
        catchError(this.handleError<Doc>('getClubByName', undefined))
      );
    } else {
      const url = `${this.API_URL}clubes/${nombre}`;
      return this.http.get<Doc>(url)
        .pipe(
          catchError(this.handleError<Doc>('getClubByName', undefined))
        );
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}



