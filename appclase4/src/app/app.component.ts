import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mostrarSaludo = true;
  buttonMessage = 'ocultar saludo';

  constructor(){}

  toogleMostrarSaludo(){
    if(this.buttonMessage === 'ocultar saludo'){
      this.buttonMessage='mostrar saludo';
      this.mostrarSaludo = false

    } else{
      this.buttonMessage = 'ocultar saludo'
      this.mostrarSaludo=true
    }
  }
}
