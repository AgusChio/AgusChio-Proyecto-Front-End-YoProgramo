import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  experiencia!: Experiencia[];

  constructor(private experienciaServicio: ExperienciaService, private tokenService: TokenService){ }

  isLogged = false;

  cargarExperiencia(): void {
    this.experienciaServicio.getExperiencia().subscribe((experiencia) => {
      this.experiencia = experiencia;
    });
  }

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  deleteExperiencia(id: number): void {
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
          this.experienciaServicio.delete(id).subscribe((success) => {
            Swal.fire(
              '¡Borrado!',
              'La experiencia ha sido eliminada.',
              'success'
            );
            this.cargarExperiencia();
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
