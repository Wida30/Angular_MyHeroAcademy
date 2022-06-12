import { PersonajeInterface } from './../../models/personajes.models';
import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  public personajeList: PersonajeInterface[] = [];

  constructor(public personajeService: PersonajesService) { }

  ngOnInit(): void {

    this.personajeService.getPersonajes().subscribe((data:any) => {
      const personajesApi: PersonajeInterface[] = data.personajes.map((personaje: any) => ({
        id: personaje.id,
        nombre: personaje.nombre,
        don: personaje.don,
        descripcion: personaje.descripcion,
        genero: personaje.genero,
        rol: personaje.rol,
        foto: personaje.foto,
        gif:personaje.gif,
      }));
      this.personajeList = personajesApi
      console.log(this.personajeList)
    })
  }

}
