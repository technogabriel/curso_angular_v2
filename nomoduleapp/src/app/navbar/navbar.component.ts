import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';
import { DebeLoguearseComponent } from '../debe-loguearse/debe-loguearse.component';
import { SaludoComponent } from '../saludo/saludo.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,LoginComponent, RouterLink, DebeLoguearseComponent, SaludoComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
