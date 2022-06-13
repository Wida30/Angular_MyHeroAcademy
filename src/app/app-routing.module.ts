import { RolesComponent } from './pages/roles/roles.component';
import { SolounoComponent } from './pages/solouno/solouno.component';
import { SuscribirComponent } from './pages/suscribir/suscribir.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { TemporadasComponent } from './pages/temporadas/temporadas.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "temporadas", component:TemporadasComponent},
  {path: "personajes", component:PersonajesComponent},
  {path: "personajes/:personajeID", component:SolounoComponent},
  {path: "suscribirse", component:SuscribirComponent},
  // {path: "personajes/:rol", component:RolesComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
