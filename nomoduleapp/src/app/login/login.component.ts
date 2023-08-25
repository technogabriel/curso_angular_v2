import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebeLoguearseComponent } from '../debe-loguearse/debe-loguearse.component';
import { SaludoComponent } from '../saludo/saludo.component';
import { RouterLink } from '@angular/router';

export const LOCALSTORAGE_ENTRY_USUARIO_LOGUEADO = "USUARIO_LOGUEADO";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, DebeLoguearseComponent, SaludoComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loguearse(){
    localStorage.setItem(LOCALSTORAGE_ENTRY_USUARIO_LOGUEADO, JSON.stringify(true));

  }

  desloguearse() {
    localStorage.setItem(LOCALSTORAGE_ENTRY_USUARIO_LOGUEADO, JSON.stringify(false));

  }

}
