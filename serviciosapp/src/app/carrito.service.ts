import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private count =0;
  private _cantidadDeProductosEnElCarrito = new BehaviorSubject(this.count);
 
  get cantidadDeProductosEnElCarrito(){
    return this._cantidadDeProductosEnElCarrito.asObservable();
  }

  agregarProductoAlCarrito(){
    this.count++;
    this._cantidadDeProductosEnElCarrito.next(this.count);
  }

  removeProductoDelCarrito(){
    if(this.count > 0){
      this.count--;
    }
    
    this._cantidadDeProductosEnElCarrito.next(this.count);
  }

  constructor() { }
}
