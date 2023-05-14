import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion!: Educacion[];

  constructor(private tokenService: TokenService, private educacionService: EducacionService) { }

  isLogged = false;

  cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe((educacion) => {
      this.educacion = educacion;
    });
  }

  ngOnInit(): void {
    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
