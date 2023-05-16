import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HysComponent } from './components/hys/hys.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { EducacionComponent } from './components/educacion/educacion.component';

import  {  NgCircleProgressModule  }  from  'ng-circle-progress';
import { ScrollToTopComponent } from './components/shared/scroll-to-top/scroll-to-top.component';
import { EditarSobreMiModalComponent } from './components/editar-sobre-mi-modal/editar-sobre-mi-modal.component';
import { EditarPersonaModalComponent } from './components/editar-persona-modal/editar-persona-modal.component';
import { EditarProyectosModalComponent } from './components/editar-proyectos-modal/editar-proyectos-modal.component';
import { EditarExperienciaModalComponent } from './components/editar-experiencia-modal/editar-experiencia-modal.component';
import { EditarSkillsModalComponent } from './components/editar-skills-modal/editar-skills-modal.component';
import { EditarEducacionModalComponent } from './components/editar-educacion-modal/editar-educacion-modal.component' ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    RedesSocialesComponent,
    EducacionComponent,
    ScrollToTopComponent,
    EditarSobreMiModalComponent,
    EditarPersonaModalComponent,
    EditarProyectosModalComponent,
    EditarExperienciaModalComponent,
    EditarSkillsModalComponent,
    EditarEducacionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    // Especifique ng-circle-progress como una importación 
    NgCircleProgressModule . forRoot ( { 
      // establece los valores predeterminados aquí 
      radius: 100 , 
      outerStrokeWidth: 16 , 
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
