import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Contenido, Noticias } from 'src/app/interfaces/Noticias';
import { Maestro } from '../../interfaces/Maestros';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent {

  //noticias: Doc[] = [];
  maestros: Maestro[] = [];

  unMaestro: Maestro [] = []
  constructor(
    private apiService: ApiService
  ) {
  };
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getNoticias();
    this.getMaestros();
    this.getMaestroById('65cd0e58482b6427385671b6');
  }

  getMaestros(){
    console.log('getMaestrosPayload');
    this.apiService.getMaestros().subscribe(res =>{
      console.log('getMaestrosResponse', res);
      this.maestros = res;
    });

  }

  getMaestroById(id: string){
    console.log('getMaestroByIdPayload');
    this.apiService.getMaestroById(id).subscribe(res =>{
      console.log('getMaestroByIdResponse', res);
      this.unMaestro = res;
    });
  }

  getNoticias() {
    this.apiService.getNoticias().subscribe({
      next: (data: Noticias) => {
        //this.noticias = data.docs;
      },
      error:(err) =>{
       // this.noticias = [];
      },
    });
  }
}
