import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Contenido, Doc, Noticias } from 'src/app/interfaces/Noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent {
 
  noticias: Doc[] = [];

  constructor(
    private apiService: ApiService
  ) {

  };
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getNoticias();
  }

  getNoticias() {
    this.apiService.getNoticias().subscribe({
      next: (data: Noticias) => {
        this.noticias = data.docs;
      },
      error:(err) =>{
        this.noticias = [];
      },
    });
  }
}
