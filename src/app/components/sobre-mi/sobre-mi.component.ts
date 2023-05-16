import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/persona';
import { SobreMi } from 'src/app/models/sobre-mi';
import { SobreMiService } from 'src/app/services/sobre-mi.service';
import { TokenService } from 'src/app/services/token.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit {
  persona: Persona = new Persona("","","","","","");
  sobreMi: SobreMi = new SobreMi("","","",);

  constructor(private personaService: PersonaService, private sobreMiService: SobreMiService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit() {
    this.personaService.getPersona().subscribe(persona => {
      this.persona = persona[0];
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarSobreMi();
  }

  cargarSobreMi(): void {
    this.sobreMiService.getSobreMi().subscribe(sobreMi => {
      this.sobreMi = sobreMi[0];
    });
  }



  deleteSobreMi(id: number): void {
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
          this.sobreMiService.delete(id).subscribe((success) => {
            Swal.fire(
              '¡Borrado!',
              'La experiencia ha sido eliminada.',
              'success'
            );
            this.cargarSobreMi();
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
