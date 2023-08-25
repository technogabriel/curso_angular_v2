import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-debe-loguearse',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './debe-loguearse.component.html',
  styleUrls: ['./debe-loguearse.component.css']
})
export class DebeLoguearseComponent {

}
