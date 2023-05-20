import { Component, OnInit} from '@angular/core';
import { HysService } from 'src/app/services/hys.service';
import { TokenService } from 'src/app/services/token.service';
import { ApplicationSkills } from 'src/app/models/application-skills';

import { TypeSkillEnum } from 'src/app/models/type-skill-enum';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillComponent implements OnInit {

  typeSkills!: TypeSkillEnum;
  skillsApplication: ApplicationSkills = new ApplicationSkills("", 0, "", "","", this.typeSkills, "", "");
  isLogged = false;

  constructor(private skillService: HysService ,private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };

  onCreateSkill() {
    this.skillService.create(this.skillsApplication).subscribe(
      (response: any) => {
          Swal.fire({
            title: 'Skill creada',
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

