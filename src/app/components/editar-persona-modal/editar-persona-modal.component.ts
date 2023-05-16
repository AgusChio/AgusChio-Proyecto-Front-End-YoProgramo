import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/persona';
import { TokenService } from 'src/app/services/token.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-persona-modal',
  templateUrl: './editar-persona-modal.component.html',
  styleUrls: ['./editar-persona-modal.component.css']
})
export class EditarPersonaModalComponent implements OnInit{
  persona: Persona = new Persona("","","","","","");

  constructor(private personaService: PersonaService, private tokenService: TokenService) { }
  
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
  }


  onUpdatePersona() {
    this.personaService.editarPersona(this.persona.id, this.persona).subscribe(
      (response: any) => { 
        console.log(response);
        if (response.status == 200){
          Swal.fire({
            title: 'Sobre mí actualizado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
          }).then(() => {
            setTimeout(() => {
              location.reload();
            }, 100);
          });
        }
      },
      (error: any) => {
        console.log(error);
        // Si la respuesta del servidor es un error, muestra un mensaje de error con el mensaje recibido del servidor.
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
