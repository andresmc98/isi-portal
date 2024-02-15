import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Maestro } from 'src/app/interfaces/Maestros';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.scss'],
})
export class MaestroComponent {
  maestro!: Maestro;
  apiUrl = environment.baseMediaUrl;

  constructor(private apiservice: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.apiservice.getMaestroById(params['maestro']).subscribe((res) => {
        this.maestro = res;
        console.log(this.maestro);
      });
    });
  }
}
