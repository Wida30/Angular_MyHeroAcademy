import { PersonajeInterface } from './../../../models/personajes.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detallepersonaje',
  templateUrl: './detallepersonaje.component.html',
  styleUrls: ['./detallepersonaje.component.scss']
})
export class DetallepersonajeComponent implements OnInit {

  @Input() public personaje!: PersonajeInterface

  constructor() { }

  ngOnInit(): void {
  }

}
