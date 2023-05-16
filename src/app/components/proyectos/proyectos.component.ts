import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos!: Proyectos[];

  constructor(private tokenService: TokenService, private proyectosService: ProyectosService) {}

  isLogged = false;

  cargarProyectos() {
    this.proyectosService.getProyectos().subscribe(proyectos => {
      this.proyectos = proyectos;
    });
    }


  ngOnInit(): void {
    this.cargarProyectos();
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
          this.proyectosService.delete(id).subscribe((success) => {
            Swal.fire(
              '¡Borrado!',
              'El Proyecto ha sido eliminado.',
              'success'
            );
            this.cargarProyectos();
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
