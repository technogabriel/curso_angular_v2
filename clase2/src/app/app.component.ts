import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calcularSuma(numeros: number[]): number {
    let suma = 0;

    for (let numero of numeros) {

      suma += numero;
    }

    return suma;
  }
  constructor() {
    console.log(this.calcularSuma(([1, 2, 3, 4, 5, 6])))
  }
}
