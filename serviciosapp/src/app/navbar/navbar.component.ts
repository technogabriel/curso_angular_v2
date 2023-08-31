import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  titulo ="Sitio de Compras";
  //signo $ es por convencion de que es un observable
  readonly cantidadItemCarrito$ = this.carritoService.cantidadDeProductosEnElCarrito;
  //private cantidadDeItemsDelCarritoSubscription : Subscription
  cantidadDeItemsDelCarrito: number =0;

  constructor(private carritoService: CarritoService){

     this.cantidadItemCarrito$.subscribe({
      next: (value)=>{
        this.cantidadDeItemsDelCarrito = value;

      },
      error: (err)=>{
        console.log("Error")
      },
      complete: ()=>{
        console.log("Se completo el codigo");
      }
    })

    
    // setInterval(()=>{
    //   this.cantidadItemCarrito = carritoService.cantidadDeProductosEnElCarrito;
    // },500)
    
  }

}
