import { Component, signal } from '@angular/core';

let _contador=1;
let intervalContador : any;

enum BORDERCOLOR {
  ROJO = 'borde-rojo',
  NEGRO = 'borde-negro'
}



@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent {
  contador = signal(_contador);

    constructor(){
      console.log("Saludo instanciado");
      if(!intervalContador){

      intervalContador = setInterval(()=>{
        _contador++;
        this.contador.set(_contador);
      },1000);
      }
    }

  noRetornar(
    nombre:string,
    edad:number
  ):{
    nombre: string;
    edad:number;
  } {
    return {
      nombre,
      edad,
    };
  }

  urlImg =
  'https://th.bing.com/th/id/OIP.m1FcoUO3NqgOuZiiCwKr0QHaDr?pid=ImgDet&rs=1';
  claseDeBorde= BORDERCOLOR.NEGRO
  listaDeColores =[
    "violeta",
    "verde",
    "rojo",
    "negro",
    "azul"
  ]


cambiarColorDeBorde(){
  console.log("click")
  if(this.claseDeBorde === BORDERCOLOR.NEGRO){
    this.claseDeBorde = BORDERCOLOR.ROJO
  } else {
    this.claseDeBorde = BORDERCOLOR.NEGRO
  }

}

}


