import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  listaProductos= [
    'Cepillo de dientes',
    'Perfume',
    'Desodorante'
  ];
  constructor(private carritoService : CarritoService){}

  agregarAlcarrito(){
    this.carritoService.agregarProductoAlCarrito();
  }

  removeProductoDelCarrito(){
    this.carritoService.removeProductoDelCarrito();
  }

}
