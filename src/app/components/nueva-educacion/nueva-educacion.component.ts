import { Component, OnInit} from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { ApplicationEducacion } from 'src/app/models/application-educacion';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  educacionApplication: ApplicationEducacion = new ApplicationEducacion("", "", "", "", "", "", "");
  isLogged = false;

  constructor(private educacionService: EducacionService,private tokenService: TokenService) { }


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };

  onCreateEducacion() {
    this.educacionService.create(this.educacionApplication).subscribe(
      (response: any) => {
          Swal.fire({
            title: 'Educacion creada',
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