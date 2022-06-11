import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  public personajesURL: string ="http://localhost:5000/bokunohero"

  // "http://localhost:5000/bokunohero"

  // "https://bbdd-my-hero-wida30.vercel.app/"

  constructor( private httpClient: HttpClient ) { }

  public getPersonajes() {
    return this.httpClient.get(this.personajesURL)
  }

  public solouno(personajeID:any){
    return this.httpClient.get(`http://localhost:5000/bokunohero/id/${personajeID}`)
  }

}
