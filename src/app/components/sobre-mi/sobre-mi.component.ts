import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/persona';
import { SobreMi } from 'src/app/models/sobre-mi';
import { SobreMiService } from 'src/app/services/sobre-mi.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit {
  persona: Persona = new Persona("","","","","","");
  sobreMi: SobreMi = new SobreMi("","","");

  constructor(private personaService: PersonaService, private sobreMiService: SobreMiService) { }

  ngOnInit() {
    this.personaService.getPersona().subscribe(persona => {
      this.persona = persona[0];
    });

    this.sobreMiService.getSobreMi().subscribe(sobreMi => {
      this.sobreMi = sobreMi[0];
    })
  }
}
