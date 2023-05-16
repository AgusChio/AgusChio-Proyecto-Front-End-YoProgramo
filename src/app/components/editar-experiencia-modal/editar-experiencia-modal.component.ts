import { Component, OnInit, Input } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { ApplicationExperiencia } from 'src/app/models/application-experiencia';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/persona';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-experiencia-modal',
  templateUrl: './editar-experiencia-modal.component.html',
  styleUrls: ['./editar-experiencia-modal.component.css']
})
export class EditarExperienciaModalComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", "", "");
  experiencia!: Experiencia;
  experiencias!: Experiencia[];
  @Input() id!: number;
  @Input() data!: Experiencia;
  modalTarget: string = '';
  experienciaAppliaction: ApplicationExperiencia = new ApplicationExperiencia("", "", "", "");
  isLogged = false;

  constructor(
    private personaService: PersonaService,
    private experienciaService: ExperienciaService,
    private tokenService: TokenService
  ) { }


  cargarExperiencia(): void {
    this.experienciaService.getExperiencia().subscribe((experiencias) => {
      this.experiencias = experiencias;
    });
  }

  
  bucarporId(): void{
    this.experiencia = this.experiencias.find(e => e.id == this.id)!;
    console.log(this.experiencia)
    this.experienciaAppliaction = new ApplicationExperiencia(this.experiencia.tituloServicios, this.experiencia.descripcion, this.persona.nombre, this.persona.apellido);
  }


  ngOnInit(): void {
    this.personaService.getPersona().subscribe(persona => {
      this.persona = persona[0];
    });
    this.modalTarget = "#modales"+this.data.id;
    this.cargarExperiencia();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };

  onUpdateExperiencia() {
    this.experienciaService.update(this.experiencia!.id, this.experienciaAppliaction).subscribe(
      (response: any) => {
          Swal.fire({
            title: 'Experiencia actualizada',
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
