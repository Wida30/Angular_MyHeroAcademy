import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { TemporadasComponent } from './pages/temporadas/temporadas.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { SuscribirComponent } from './pages/suscribir/suscribir.component';
import { HomeComponent } from './pages/home/home.component';
import { TemsComponent } from './pages/temporadas/componentes/tems/tems.component';

import { DetallepersonajeComponent } from './pages/personajes/detallepersonaje/detallepersonaje.component';
import { SolounoComponent } from './pages/solouno/solouno.component';
import { RolesComponent } from './pages/roles/roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    TemporadasComponent,
    PersonajesComponent,
    SuscribirComponent,
    HomeComponent,
    TemsComponent,
     DetallepersonajeComponent,
    SolounoComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
