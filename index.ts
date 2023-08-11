
interface IAlumno{
    nombre: string;
    edad: number;
    esMacho: boolean;
    colorDePiel? : ColorDePiel;
}

enum ColorDePiel {
    blanco='Blanco',
    negro= 'Negro',
}

let nombre: string;
let edad : number;
let esMacho : boolean;
let alumno: Alumno;
let colorDePiel : ColorDePiel;

nombre="adan",
edad = 32;
esMacho=true;
colorDePiel = ColorDePiel.negro;

alumno= {
    nombre,
    edad,
    esMacho,
    colorDePiel
};

console.log(alumno);

class Alumno implements IAlumno{
    nombre;
    edad;
    esMacho;
    colorDePiel;
    constructor(alumno: IAlumno){
        this.nombre = alumno.nombre;
        this.edad = alumno.edad;
        this.esMacho = alumno.esMacho;
        this.colorDePiel = alumno.colorDePiel;
        
    }
}

alumno = new Alumno({
    nombre,
    edad,
    esMacho,
    colorDePiel

});

