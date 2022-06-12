import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PersonajesService } from 'src/app/services/personajes.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  public rol!: any;

  constructor(
    public personajesServices: PersonajesService,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    // this.activatedRoute.paramMap.subscribe((params) => {
    //   const rol = params.get('rol');

    //   this.activatedRoute.rolPersonaje(rol).subscribe((data:any) => {
    //     this.rol = data;

    //   })
      
      
    // })

  }

}
