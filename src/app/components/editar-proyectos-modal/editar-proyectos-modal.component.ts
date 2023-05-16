import { Component, OnInit, Input } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';
import { ApplicationProyectos } from 'src/app/models/application-proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/persona';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proyectos-modal',
  templateUrl: './editar-proyectos-modal.component.html',
  styleUrls: ['./editar-proyectos-modal.component.css']
})
export class EditarProyectosModalComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", "", "");
  proyecto!: Proyectos;
  proyectos!: Proyectos[];
  @Input() id!: number;
  @Input() data!: Proyectos;
  modalTarget: string = '';
  proyectoApplication: ApplicationProyectos = new ApplicationProyectos("", "", "", "","", "", "","", "");
  isLogged = false;

  constructor(
    private personaService: PersonaService,
    private proyectoService: ProyectosService,
    private tokenService: TokenService
  ) { }


  cargarProyecto(): void {
    this.proyectoService.getProyectos().subscribe((proyecto) => {
      this.proyectos = proyecto;    
      
    });
  }

  bucarporId(): void{
    this.proyecto = this.proyectos.find(e => e.id == this.id)!;
    this.proyectoApplication = new ApplicationProyectos(this.proyecto.nombreProyecto, this.proyecto.imagen, this.proyecto.descripcion, this.proyecto.fechaRealizacion , this.proyecto.urlVideo, this.proyecto.urlGitHub, this.proyecto.urlDeploy, this.persona.nombre, this.persona.apellido);
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(persona => {
      this.persona = persona[0];
    });
    this.modalTarget = "#modaless"+this.data.id;
    this.cargarProyecto();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };




  onUpdateProyecto() {
    this.proyectoService.update(this.proyecto!.id, this.proyectoApplication).subscribe(
      (response: any) => {
          Swal.fire({
            title: 'Proyecto actualizado',
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