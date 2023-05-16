import { Component, OnInit, Input } from '@angular/core';
import { Hys } from 'src/app/models/hys';
import { HysService } from 'src/app/services/hys.service';
import { ApplicationSkills } from 'src/app/models/application-skills';
import { TokenService } from 'src/app/services/token.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/persona';
import { TypeSkillEnum } from 'src/app/models/type-skill-enum';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-skills-modal',
  templateUrl: './editar-skills-modal.component.html',
  styleUrls: ['./editar-skills-modal.component.css']
})


export class EditarSkillsModalComponent implements OnInit {

  typeSkills!: TypeSkillEnum;
  persona: Persona = new Persona("", "", "", "", "", "");
  skill!: Hys;
  skills!: Hys[];
  @Input() softSkills!: Hys[];
  @Input() hardSkills!: Hys[];
  @Input() id!: number;
  @Input() data!: Hys;
  modalTarget: string = '';
  skillsApplication: ApplicationSkills = new ApplicationSkills("", 0, "", "","", this.typeSkills, "", "");
  isLogged = false;

  constructor(
    private personaService: PersonaService,
    private skillsService: HysService,
    private tokenService: TokenService
  ) { }


  cargarSkills(): void {
    this.skillsService.getSkills().subscribe((skills) => {
      this.skills = skills;
      this.skills = skills.map((h) => new Hys(h.id,h.nombreSkill,h.porcentaje, h.imgsrc, h.colorInterno, h.colorExterno, h.typeSkills as TypeSkillEnum));
      this.softSkills = this.skills.filter((h) => h.typeSkills === TypeSkillEnum.SOFT);
      this.hardSkills = this.skills.filter((h) => h.typeSkills === TypeSkillEnum.HARD);
    });
  }

  bucarporId(): void{
    this.skill = this.skills.find(e => e.id == this.id)!;
    this.skillsApplication= new ApplicationSkills(this.skill.nombreSkill, this.skill.porcentaje , this.skill.imgsrc, this.skill.colorInterno, this.skill.colorExterno, this.skill.typeSkills, this.persona.nombre, this.persona.apellido);
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(persona => {
      this.persona = persona[0];
    });
    this.modalTarget = "#modalee"+this.data.id;
    this.cargarSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };




  onUpdateSkills() {
    this.skillsService.update(this.skill!.id, this.skillsApplication).subscribe(
      (response: any) => {
          Swal.fire({
            title: 'Skill actualizada',
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

