import { Component, OnInit} from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { ApplicationExperiencia } from 'src/app/models/application-experiencia';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})


export class NuevaExperienciaComponent implements OnInit {

  experienciaAppliaction: ApplicationExperiencia = new ApplicationExperiencia("", "", "", "");
  isLogged = false;

  constructor(private experienciaService: ExperienciaService,private tokenService: TokenService) { }




  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };

  onCreateExperiencia() {
    this.experienciaService.create(this.experienciaAppliaction).subscribe(
      (response: any) => {
          Swal.fire({
            title: 'Experiencia creada',
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
