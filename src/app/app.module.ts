import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import  {  NgCircleProgressModule  }  from  'ng-circle-progress' ;

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
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
