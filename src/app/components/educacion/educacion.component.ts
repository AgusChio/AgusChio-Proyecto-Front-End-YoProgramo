import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion!: Educacion[];

  constructor(private tokenService: TokenService, private educacionService: EducacionService) { }

  isLogged = false;

  cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe((educacion) => {
      this.educacion = educacion;
    });
  }

  ngOnInit(): void {
    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  deleteEducacion(id: number): void {
    if (id != undefined) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás deshacer esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.educacionService.delete(id).subscribe((success) => {
            Swal.fire(
              '¡Borrado!',
              'La Educacion ha sido eliminada.',
              'success'
            );
            this.cargarEducacion();
          });
        } else {
          Swal.fire(
            'Cancelado',
            'La operación de borrado ha sido cancelada.',
            'info'
          );
        }
      });
    }
  }
  

}
