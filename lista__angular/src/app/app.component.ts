import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http'
import { PokemonService } from './pokemon.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista__angular';
  resultados:any = [];

  constructor(pokemonService : PokemonService){
    pokemonService.
    buscarYDevolverImagenes('Rick')
    // .pipe(
    //   /*Forma 2*/
    //   map(respuesta => respuesta.results.map((result:any)=> result.image))
    // )
    .subscribe({
      next: (personaje)=>{
        console.log(personaje);
        // Forma 1:
        // this.resultados = personaje.results.map((r:any) => r.image)
        this.resultados = personaje;
      }
    })

  }
}
