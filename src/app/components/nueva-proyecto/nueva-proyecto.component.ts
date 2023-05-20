import { Component, OnInit} from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';
import { ApplicationProyectos } from 'src/app/models/application-proyectos';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-proyecto',
  templateUrl: './nueva-proyecto.component.html',
  styleUrls: ['./nueva-proyecto.component.css']
})

export class NuevaProyectoComponent implements OnInit {

  proyectoApplication: ApplicationProyectos = new ApplicationProyectos("", "", "", "","", "", "","", "");
  isLogged = false;

  constructor(private proyectoService: ProyectosService,private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };

  onCreateProyecto() {
    this.proyectoService.create(this.proyectoApplication).subscribe(
      (response: any) => {
          Swal.fire({
            title: 'Proyecto creado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
          }).then(() => {
            setTimeout(() => {
              location.reload();
            }, 100);
          });
        },
      (error: any) => {
        Swal.fire({
          title: 'Error',
          text: error.error,
          icon: 'error',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    );
    
  }
}
