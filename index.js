var nombre;
var edad;
var esMacho;
var alumno;
nombre = "adan",
    edad = 32;
esMacho = true;
alumno = {
    nombre: nombre,
    edad: edad,
    esMacho: esMacho
};
console.log(alumno);
var Alumno = /** @class */ (function () {
    function Alumno(alumno) {
        this.nombre = alumno.nombre;
        this.edad = alumno.edad;
        this.esMacho = alumno.esMacho;
    }
    return Alumno;
}());
