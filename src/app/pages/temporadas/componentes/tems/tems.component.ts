import { Component, Input, OnInit } from '@angular/core';
import { tempordaInterface } from 'src/app/models/tems.models';

@Component({
  selector: 'app-tems',
  templateUrl: './tems.component.html',
  styleUrls: ['./tems.component.scss']
})
export class TemsComponent implements OnInit {

  @Input() public tems!: tempordaInterface

  constructor() { }

  ngOnInit(): void {
  }

}
