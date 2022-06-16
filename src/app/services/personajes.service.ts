import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  public personajesURL: string ="https://boku-no-hero-bbdd.vercel.app/"

  // "http://localhost:5000/bokunohero"

  // "https://bbdd-my-hero-wida30.vercel.app/"

  constructor( private httpClient: HttpClient ) { }

  public getPersonajes() {
    return this.httpClient.get(this.personajesURL)
  }

  public solouno(personajeID:any){
    return this.httpClient.get(`https://boku-no-hero-bbdd.vercel.app/id/${personajeID}`)
  }

  public rolPersonaje(rol:any){
    return this.httpClient.get(`https://boku-no-hero-bbdd.vercel.app/rol/${rol}`)
  }

}
