import { tempordaInterface } from './../../models/tems.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.scss']
})
export class TemporadasComponent implements OnInit {
  public temporada1: tempordaInterface
  public temporada2: tempordaInterface

  constructor() { 

    this.temporada1 = {

      temporada:" temporada 1",
      resumen: "la historia se centra en los estudiantes de UA High School mientras se entrenan para ser la próxima generación de superhéroes, en Un mundo donde los criminales se han convertido en villanos peligrosos que solo los héroes profesionales pueden detener, gracias a que el 80% de la población mundial tiene superpoderes (o peculiaridades, como los llama el programa).",
      foto:"https://areajugones.sport.es/wp-content/uploads/2021/07/myheroacademia.jpg"
    };

    this.temporada2 = {

      temporada:" temporada 2",
      resumen: "En la Academia UA ni siquiera un ataque violento puede interrumpir el evento más prestigioso: el festival deportivo escolar. Este festival reconocido en todo Japón es una gran oportunidad para que los aspirantes a héroes muestren sus habilidades tanto al público como a los reclutadores potenciales. Sin embargo, el camino hacia el éxito nunca es fácil, especialmente para Izuku Midoriya, cuya particularidad posee una tremenda fuerza bruta pero también es muy poco eficaz. Compitiendo contra el talento de todos sus compañeros de clase, como el poder de Shoto Todoroki, Izuku debe utilizar su ingenio y dominar su entorno para alcanzar la victoria y demostrar su valía al resto del mundo.",
      foto:"https://www.koi-nya.net/img/subidos_posts/2016/12/boku-no-hero-academia-s2-707x1000.jpg"
    };
    
  }

  ngOnInit(): void {
  }

}
