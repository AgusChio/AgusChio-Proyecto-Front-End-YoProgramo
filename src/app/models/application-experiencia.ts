export class ApplicationExperiencia {
    tituloServicio: string;
    descripcion: string;
    nombre: string;
    apellido: string;

    constructor(tituloServicio: string, descripcion: string, nombre: string,apellido: string){
        this.tituloServicio = tituloServicio;
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
