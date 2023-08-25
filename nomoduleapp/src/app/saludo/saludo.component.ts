import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DebeLoguearseComponent } from '../debe-loguearse/debe-loguearse.component';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [CommonModule, RouterLink, DebeLoguearseComponent],
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {

}
