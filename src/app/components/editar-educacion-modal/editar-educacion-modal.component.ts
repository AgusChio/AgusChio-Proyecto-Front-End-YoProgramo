import { Component, OnInit, Input } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { ApplicationEducacion } from '../../models/application-educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/persona';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-educacion-modal',
  templateUrl: './editar-educacion-modal.component.html',
  styleUrls: ['./editar-educacion-modal.component.css']
})
export class EditarEducacionModalComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", "", "");
  educacion!: Educacion;
  educaciones!: Educacion[];
  @Input() id!: number;
  @Input() data!: Educacion;
  modalTarget: string = '';
  educacionApplication: ApplicationEducacion = new ApplicationEducacion("", "", "", "","", "", "");
  isLogged = false;

  constructor(
    private personaService: PersonaService,
    private educacionService: EducacionService,
    private tokenService: TokenService
  ) { }


  cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe((educacion) => {
      this.educaciones = educacion;    
      
    });
  }

  bucarporId(): void{
    this.educacion = this.educaciones.find(e => e.id == this.id)!;
    this.educacionApplication = new ApplicationEducacion(this.educacion.titulo, this.educacion.entidadEducativa, this.educacion.inicio, this.educacion.fin, this.educacion.imagenCertificado ,this.persona.nombre, this.persona.apellido);
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(persona => {
      this.persona = persona[0];
    });
    this.modalTarget = "#modal"+this.data.id;
    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };




  onUpdateEducacion() {
    this.educacionService.update(this.educacion!.id, this.educacionApplication).subscribe(
      (response: any) => {
          Swal.fire({
            title: 'Educacion actualizada',
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

