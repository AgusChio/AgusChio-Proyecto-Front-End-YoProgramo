import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Hys } from 'src/app/models/hys';
import { HysService } from 'src/app/services/hys.service';
import { TypeSkillEnum } from 'src/app/models/type-skill-enum';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  hys!: Hys[];
  softSkills: Hys[] = [];
  hardSkills: Hys[] = [];


  constructor(private tokenService: TokenService, private hysService: HysService) { }

  isLogged = false;

  cargarSkills(): void {
    this.hysService.getSkills().subscribe((hys) => {
      this.hys = hys.map((h) => new Hys(h.nombreSkill,h.porcentaje, h.imgsrc, h.colorInterno, h.colorExterno, h.typeSkills as TypeSkillEnum));
      console.log(hys);
    
      this.softSkills = this.hys.filter((h) => h.typeSkills === TypeSkillEnum.SOFT);
      console.log(this.softSkills);
      this.hardSkills = this.hys.filter((h) => h.typeSkills === TypeSkillEnum.HARD);
    });
  }


  ngOnInit(): void {
    this.cargarSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
