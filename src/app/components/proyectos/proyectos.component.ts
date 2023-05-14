import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos!: Proyectos[];

  constructor(private tokenService: TokenService, private proyectosService: ProyectosService) {}

  isLogged = false;

  cargarProyectos() {
    this.proyectosService.getProyectos().subscribe(proyectos => {
      this.proyectos = proyectos;
    });
    }


  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
