import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Hys } from 'src/app/models/hys';
import { HysService } from 'src/app/services/hys.service';
import { TypeSkillEnum } from 'src/app/models/type-skill-enum';

import Swal from 'sweetalert2';

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
      this.hys = hys.map((h) => new Hys(h.id,h.nombreSkill,h.porcentaje, h.imgsrc, h.colorInterno, h.colorExterno, h.typeSkills as TypeSkillEnum));
      this.softSkills = this.hys.filter((h) => h.typeSkills === TypeSkillEnum.SOFT);
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

  
  deleteSkills(id: number): void {
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
          this.hysService.delete(id).subscribe((success) => {
            Swal.fire(
              '¡Borrado!',
              'La habilidad ha sido eliminada.',
              'success'
            );
            this.cargarSkills();
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
