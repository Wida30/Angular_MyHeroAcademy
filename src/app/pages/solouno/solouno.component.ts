import { PersonajeInterface } from './../../models/personajes.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';
@Component({
  selector: 'app-solouno',
  templateUrl: './solouno.component.html',
  styleUrls: ['./solouno.component.scss'],
})
export class SolounoComponent implements OnInit {
  public unpersonaje!: any;

  constructor(
    private personajesServices: PersonajesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const personajeID = params.get('personajeID');

      this.personajesServices.solouno(personajeID).subscribe((data: any) => {
     

        this.unpersonaje = data;
        console.log(this.unpersonaje);
      });
    });
  }
}

// this.activatedRoute.paramMap.subscribe((params) => {
//   const personajeID = params.get('personajeID');

//   this.personajesServices.solouno(personajeID).subscribe((data: any) => {
//     const unpersonajeAPI: PersonajeInterface = data.personaje.map(
//       (personaje: any) => ({
//         nombre: personaje.nombre,
//         don: personaje.don,
//         descripcion: personaje.descripcion,
//         genero: personaje.genero,
//         rol: personaje.rol,
//         foto: personaje.foto,
//       })
//     );

//     this.unpersonaje = unpersonajeAPI;
//     console.log(this.unpersonaje);
//   });
// });


