import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Maestro } from 'src/app/interfaces/Maestros';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.component.html',
})
export class MaestrosComponent {
  maestros: Maestro[] = [];
  apiUrl = environment.baseMediaUrl;

  constructor(private apiservice: ApiService) {}

  ngOnInit() {
    this.apiservice.getMaestros().subscribe((response: any) => {
      console.log(response.docs);
      response.docs.forEach((doc: any) => {
        this.maestros.push(doc);
      });
      console.log('Nombres de Maestros:', this.maestros);
    });
  }
}
