import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  experiencia!: Experiencia[];

  constructor(private experienciaServicio: ExperienciaService, private tokenService: TokenService){ }

  isLogged = false;

  cargarExperiencia(): void {
    this.experienciaServicio.getExperiencia().subscribe((experiencia) => {
      this.experiencia = experiencia;
      console.log(experiencia)
    });
  }

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
