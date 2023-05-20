import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/persona';
import { SobreMi } from 'src/app/models/sobre-mi';
import { SobreMiService } from 'src/app/services/sobre-mi.service';
import { TokenService } from 'src/app/services/token.service';
import { ApplicationSobreMi } from 'src/app/models/application-sobre-mi';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-sobre-mi-modal',
  templateUrl: './editar-sobre-mi-modal.component.html',
  styleUrls: ['./editar-sobre-mi-modal.component.css']
})
export class EditarSobreMiModalComponent implements OnInit {
  persona: Persona = new Persona("","","","","","");
  sobreMi: SobreMi = new SobreMi("","","");
  sobreMiApplication: ApplicationSobreMi = new ApplicationSobreMi("","","","","");

  constructor(private personaService: PersonaService, private sobreMiService: SobreMiService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit() {
    this.personaService.getPersona().subscribe(persona => {
      this.persona = persona[0];
    });

    this.sobreMiService.getSobreMi().subscribe(sobreMi => {
      this.sobreMi = sobreMi[0];
      this.sobreMiApplication = new ApplicationSobreMi(this.sobreMi.parrafo1,this.sobreMi.parrafo2, this.sobreMi.cv, this.persona.nombre, this.persona.apellido);
    })

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onUpdateSobreMi() {
    this.sobreMiService.update(this.sobreMi.id, this.sobreMiApplication).subscribe(
      (response: any) => { 
          Swal.fire({
            title: 'Sobre mí actualizado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
          }).then(() => {
            setTimeout(() => {
              location.reload();
            }, 100);
          });
        },
      (error: any) => {
        console.log(error);
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