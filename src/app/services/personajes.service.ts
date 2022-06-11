import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  public personajesURL: string ="http://localhost:5000/bokunohero"

  constructor( private httpClient: HttpClient ) { }

  public getPersonajes() {
    return this.httpClient.get(this.personajesURL)
  }

}
